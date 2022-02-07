function Person(firstName, lastName, age, city) {
    return {
        firstName,
        lastName,
        age,
        city
    }
}

const personsList = [
    Person('Andrzej', 'Kowalski', 44, 'Krakow'),
    Person('Dawid', 'Nowak', 25, 'Warszawa'),
    Person('Karolina', 'Tomaszewska', 31, 'Krakow'),
    Person('Ireneusz', 'Dobrowski', 33, 'Katowice')
]

const oldestList = [];

const onlyKrkList = [];

function renderPersonsList() {
    const personsListElement = document.getElementById('personsList');
    personsListElement.innerHTML = '';
    for (let i = 0; i < personsList.length; i++) {
        const personsListElement = document.createElement('li');
        personsListElement.innerText = `${personsList[i].firstName} ' ' ${personsList[i].lastName} ' ' ${personsList[i].age} ' ' ${personsList[i].city}`;
        //priceListElement.appendChild(productElement);
    }
}

function renderOldestList() {
    const olderListElement = document.getElementById('TheOldestList');

    olderListElement.innerHTML = '';

    for (let i = 0; i < personsList.length; i++) {
        const olderListElement = document.createElement('li');
        olderListElement.innerText = `${personsList[i].firstName} ' ' ${personsList[i].lastName} ' ' ${personsList[i].age} ' ' ${personsList[i].city}`;
        //orderListElement.appendChild(productElement);
    }
}

function isValidData() {
    const personFirstNameElement = document.getElementById('firstName');
    const personLastNameElement = document.getElementById('lastName');
    const personAgeElement = document.getElementById('age');
    const personCityElement = document.getElementById('city');

    if (personFirstNameElement.value === '') {
        console.error('first name can not be empty');
        return false;
    }
    if (personLastNameElement.value === '') {
        console.error('last name can not be empty');
        return false;
    }
    if (personAgeElement.value === '' || Number.isNaN(Number(personAgeElement.value))) {
        console.error('age can not be empty');
        return false;
    }
    if (personCityElement.value === '') {
        console.error('city can not be empty');
        return false;
    }
    return true;
}

function init() {
    const myBtnAdd = document.getElementById('myBtnAdd');

    myBtnAdd.addEventListener('click', (event) => {
        event.preventDefault();

        const personFirstNameElement = document.getElementById('firstName');
        const personLastNameElement = document.getElementById('lastName');
        const personAgeElement = document.getElementById('age');
        const personCityElement = document.getElementById('city');

        if (!isValidData()) {
            return;
        }

        const older = {
            firstname: personFirstNameElement.value,
            lastname: personLastNameElement.value,
            age: personAgeElement.value,
            city: personCityElement.value
        }

        //       olderList.push(older);
        //       renderOldestList();

        personFirstNameElement.value = '';
        personLastNameElement.value = '';
        personAgeElement.value = '';
        personCityElement.value = '';
    });
}

init();
renderPersonsList();
//renderOldestList();  
