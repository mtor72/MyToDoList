const list = document.querySelector('ul');
const input = document.querySelector('input');
const buttonNew = document.querySelector('button.new');

const btn = document.createElement('button');

buttonNew.addEventListener('click', () => {
    let listItem = document.createElement('li');
    listItem.innerText = input.value;
    list.appendChild(listItem);
    input.value = "";
    input.focus();
});