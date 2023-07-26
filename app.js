const inputElement = document.getElementById('input');
const createButton = document.getElementById('create');
const listElement = document.getElementById('list');

const notes = ['помыть кошк', 'почесать кошк'];

const getNoteTemplate = (title) => {
    return  `
        <li class="list-item">
        <span>${title}</span>
            <div>
                <button class="button-ok">Выполнено</button>
                <button class="button-ok red">Удалить</button>
            </div>
        </li>
    `
};

const render = () => {
    for (let i = 0; i < notes.length; i++) {
        listElement.insertAdjacentHTML('afterbegin', getNoteTemplate(notes[i]));
    }
};

render();

createButton.onclick = () => {
    if (inputElement.value.length === 0) {
        return
    }
    listElement.insertAdjacentHTML(
        'afterbegin',
        getNoteTemplate(inputElement.value)
    );
    inputElement.value = '';
};


const person = {
    firstName: 'olezha',
    lastName: 'kuznetsov',
    year: 2002,
    hasGirlfriend: false,
    languages: ['ru', 'eng'],
    getFullName: () => console.log(person.firstName + ' ' + person.lastName)
};

