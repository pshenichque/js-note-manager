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
    listElement.insertAdjacentHTML('afterbegin', getNoteTemplate(notes[1]));
    listElement.insertAdjacentHTML('afterbegin', getNoteTemplate(notes[0]));
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


