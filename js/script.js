const list = document.querySelector('ul');
const input = document.querySelector('input');

let listItem = document.createElement('li');
const btn = document.createElement('button');

listItem.innerText = 'walk the dog';

list.appendChild(listItem);

document.querySelector('button').addEventListener('click', () => {
    listItem = document.createElement('li');
    listItem.innerText = input.value;
    list.appendChild(listItem);
});