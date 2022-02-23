class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price
    }
}

let productsStr = localStorage.getItem('products');
if (productsStr == null) {
    productsStr = '[]';
}
let priceList = JSON.parse(productsStr);

let orderListStr = localStorage.getItem('orderList');
if (orderListStr == null) {
    orderListStr = '[]';
}

const orderList = JSON.parse(orderListStr);

function renderPriceList() {
    const priceListElement = document.getElementById('selectProductName');
    priceListElement.innerHTML = '';
    for (let i = 0; i < priceList.length; i++) {
        const productElement = document.createElement('option');
        productElement.value = priceList[i].name;
        productElement.innerText = priceList[i].name;
        priceListElement.appendChild(productElement);
    }
    priceListElement.value = '';
}

function renderOrderList() {
    const orderListElement = document.getElementById('productsList');
    orderListElement.innerHTML = '';

    for (let i = 0; i < orderList.length; i++) {
        const productElement = document.createElement('li');
        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Remove';
        productElement.innerText = `${orderList[i].name} x ${orderList[i].amount}`;
        productElement.appendChild(deleteButton);
        deleteButton.addEventListener('click', () => {
            orderList.splice(i, 1);
            renderOrderList();

        });

        for (let j = 0; j < priceList.price; j++) {
            priceList[j].name = orderList[i].name;
        }
        if ((orderList[i].amount * priceList[i].price) <= orderList[i].budget) {

            productElement.classList.add('green');
        }

        else {

            productElement.classList.add('red');
        }

        orderListElement.appendChild(productElement);
    }
}

function renderProductList() {
    const productListElement = document.getElementById('productList');
    productListElement.innerHTML = '';
    for (let i = 0; i < productList.length; i++) {
        const productElement = document.createElement('li');
        productElement.innerText = `${productList[i].produkt} ${productList[i].cena}`;
        productListElement.appendChild(productElement);
    }
}

function isValidData() {
    const productNameElement = document.getElementById('selectProductName');
    const productAmountElement = document.getElementById('productAmount');
    const productMaxPriceElement = document.getElementById('productMaxPrice');

    if (productNameElement.value === '') {
        console.error('product name can not be empty');
        return false;
    }
    if (productAmountElement.value === ''
        || Number.isNaN(Number(productAmountElement.value))) {
        console.error('product amount can not be empty');
        return false;
    }
    if (productMaxPriceElement.value === '') {
        console.error('product budget can not be empty');
        return false;
    }
    return true;
}

function init() {
    const myBtn = document.getElementById('myBtn');
    const myBtnAdd = document.getElementById('addToList');

    myBtn.addEventListener('click', (event) => {
        event.preventDefault();

        const productNameElement = document.getElementById('selectProductName');
        const productAmountElement = document.getElementById('productAmount');
        const productMaxPriceElement = document.getElementById('productMaxPrice');

        if (!isValidData()) {
            return;
        }

        const order = {
            name: productNameElement.value,
            amount: productAmountElement.value,
            budget: productMaxPriceElement.value
        }

        orderList.push(order);
        localStorage.setItem('orderList', JSON.stringify(orderList));
        renderOrderList();

        productNameElement.value = '';
        productAmountElement.value = '';
        productMaxPriceElement.value = '';
    });

    const refreshBtn = document.getElementById('refreshBtn');
    refreshBtn.addEventListener('click', (event) => {
        event.preventDefault();
        let productsStr = localStorage.getItem('products');
        if (productsStr == null) {
            productsStr = '[]';
        }
        priceList = JSON.parse(productsStr);
        renderPriceList();
        console.log('refreshed');
    })
}

init();
renderPriceList();
renderOrderList();

const refreshBtn = document.getElementById('refreshBtn');
setInterval(() => {
    const isChanged = !!Number(localStorage.getItem('changed'));
    if (isChanged) {
        localStorage.setItem('changed', '0');
        refreshBtn.click();
    }

}, 10000);
