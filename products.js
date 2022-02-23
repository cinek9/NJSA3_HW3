let productsStr = localStorage.getItem('products');
if (productsStr == null) {
    productsStr = '[]';
}
const productsList = JSON.parse(productsStr);

function renderProductList() {
    const productsListElement = document.getElementById('productsList');
    productsListElement.innerHTML = '';
    for (let i = 0; i < productsList.length; i++) {
        const liElement = document.createElement('li');
        liElement.innerText = `${productsList[i].name} cost ${productsList[i].price}`
        productsListElement.appendChild(liElement);
    }
}

function addToProductList() {
    const nameInput = document.getElementById('name');
    const priceInput = document.getElementById('price');
    productsList.push({ name: nameInput.value, price: priceInput.value });
    localStorage.setItem('products', JSON.stringify(productsList));
    localStorage.setItem('changed', '1');
    renderProductList();
}

const addBtn = document.getElementById('addBtn');

addBtn.addEventListener('click', addToProductList);

renderProductList();
