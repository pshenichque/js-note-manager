const inputElement = document.getElementById('input');
const createButton = document.getElementById('create');
const listElement = document.getElementById('list');

const notes = [
    {
        title: 'помить котьека',
        completed: false,
    },
    {
        title: 'расчесать котьека',
        completed: true,
    },
    {
        title: 'покормить котьека',
        completed: false,
    },
];

const getNoteTemplate = (note, index) => {
    return  `
        <li class="list-item" style="${note.completed ? 'background:#9ACD32' : ''}" data-index="${index}">
            <span class="${note.completed ? 'strikethrough' : ''}">${note.title}</span>
            <div>
                <button class="button-ok">Выполнено</button>
                <button class="button-ok red">Удалить</button>
            </div>
        </li>
    `
};

const render = () => {
    listElement.innerHTML = '';
    for (let i = 0; i < notes.length; i++) {
        listElement.insertAdjacentHTML('afterbegin', getNoteTemplate(notes[i], i));
    }
};

render();

createButton.onclick = () => {
    if (inputElement.value.length === 0) {
        return
    }
    const newNote = {
        title: inputElement.value,
        completed: false,
    };
    notes.push(newNote);
    render();
    inputElement.value = '';
};

