function Person(firstName, lastName, age, city) {
    return {
        firstName,
        lastName,
        age,
        city,
        fullName: function () {
            return `${this.firstName} ${this.lastName}`;
        }
    }
}

const personsList = [
    Person('Andrzej', 'Kowalski', 44, 'Krakow'),
    Person('Dawid', 'Nowak', 25, 'Warszawa'),
    Person('Karolina', 'Tomaszewska', 31, 'Krakow'),
    Person('Ireneusz', 'Dobrowski', 33, 'Katowice')
];

function renderPersonsList() {
    const personsListElement = document.getElementById('personsList');
    personsListElement.innerHTML = '';
    for (let i = 0; i < personsList.length; i++) {
        const personElement = document.createElement('li');
        personElement.innerText = `${personsList[i].firstName} ' ' ${personsList[i].lastName} ' ' ${personsList[i].age} ' ' ${personsList[i].city}`;
        personsListElement.appendChild(personElement);
    }
}

function createLiElement(person, parentElement) {
    const element = document.createElement('li');
    element.innerText = `${person.firstName} ${person.lastName} ${person.age} ${person.city}`;
    parentElement.appendChild(element);
}

function renderOldestList() {
    let max = personsList[0].age;
    let maxIndex = 0;

    for (let i = 0; i < personsList.length; i++) {
        if (personsList[i].age > max) {
            max = personsList[i].age
            maxIndex = i;
        }
    }

    const olderListElement = document.getElementById('TheOldestList');
    olderListElement.innerHTML = '';
    const person = personsList[maxIndex];
    createLiElement(person, olderListElement);

}

function renderKrkList() {
    const onlyKrkListElement = document.getElementById('TheKrkList');
    onlyKrkListElement.innerHTML = '';
    for (let i = 0; i < personsList.length; i++) {
        if (personsList[i].city == 'Krakow') {
            const person = personsList[i];
            createLiElement(person, onlyKrkListElement);
        }
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
    const myBtnOldMan = document.getElementById('myBtnOldMan');
    const myBtnKrK = document.getElementById('myBtnKrK');

    myBtnAdd.addEventListener('click', (event) => {
        event.preventDefault();

        const personFirstNameElement = document.getElementById('firstName');
        const personLastNameElement = document.getElementById('lastName');
        const personAgeElement = document.getElementById('age');
        const personCityElement = document.getElementById('city');

        if (!isValidData()) {
            return;
        }

        const person = Person(
            personFirstNameElement.value,
            personLastNameElement.value,
            personAgeElement.value,
            personCityElement.value
        );

        personsList.push(person);
        renderPersonsList();

        personFirstNameElement.value = '';
        personLastNameElement.value = '';
        personAgeElement.value = '';
        personCityElement.value = '';
    });

    myBtnOldMan.addEventListener('click', (event) => {
        event.preventDefault();
        renderOldestList();
    });

    myBtnKrK.addEventListener('click', (event) => {
        event.preventDefault();
        renderKrkList();
    });

}

init();
renderPersonsList();
renderOldestList();
renderKrkList();
