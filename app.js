const inputElement = document.getElementById('input')
const createButton = document.getElementById('create')
const listElement = document.getElementById('list')

createButton.onclick = () => {
    if (inputElement.value.length === 0) {
        return
    }
    listElement.insertAdjacentHTML(
        'afterbegin', 
        `
            <li class="list-item">
            <span>${inputElement.value}</span>
                <div>
                    <button class="button-ok">Выполнено</button>
                    <button class="button-ok red">Удалить</button>
                </div>
            </li>
        `
    );
    inputElement.value = '';
};