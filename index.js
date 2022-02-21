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
        productElement.innerText = `${orderList[i].name} x ${orderList[i].amount}`;

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

function isValidData() {
    const productNameElement = document.getElementById('productName');
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

    myBtn.addEventListener('click', (event) => {
        event.preventDefault();

        const productNameElement = document.getElementById('productName');
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
}

init();
renderPriceList();
renderOrderList();
