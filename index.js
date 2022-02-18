class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price
    }
}

const priceList = [
    new Product('Milk', 1),
    new Product('Bread', 2),
    new Product('Egg', 0.3),
]

const orderList = [];

function Produkt(produkt, cena) {
    return {
        produkt, cena
    }
}

const productList = [
    Produkt('Mleko', 3),
    Produkt('Woda', 2),
    Produkt('Jajka', 5),
    Produkt('Warzywa', 3),
    Produkt('Owoce', 7),
];

function renderPriceList() {
    const priceListElement = document.getElementById('priceList');
    priceListElement.innerHTML = '';
    for (let i = 0; i < priceList.length; i++) {
        const productElement = document.createElement('li');
        productElement.innerText = `${priceList[i].name} cost ${priceList[i].price}`;
        priceListElement.appendChild(productElement);
    }
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
        renderOrderList();

        productNameElement.value = '';
        productAmountElement.value = '';
        productMaxPriceElement.value = '';
    });


    myBtnAdd.addEventListener('click', (event) => {
        event.preventDefault();
        const productNameElement = document.getElementById('productName');
        const productPriceElement = document.getElementById('productPrice');

        const produkt = {
            name: productNameElement.value,
            price: productPriceElement.value,
        }
        productList.push(produkt);
        renderProductList();

    });
}

init();
renderPriceList();
renderOrderList();
renderProductList();
