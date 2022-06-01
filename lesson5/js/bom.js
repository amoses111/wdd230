const list = document.querySelector('list');
const input = document.querySelector('favchap');
const button = document.querySelector('addbutton');

button.addEventListener('click', function() {
    const myItem = input.value;
    input.value = '';

    const listItem = document.createElement('li');
    const listText = document.createElement('span');
    const listBtn = document.createElement('button');
    
    listText.textContent = myItem;
    listBtn.textContent = 'X';
    list.appendChild(listItem);
    listItem.appendChild(listText);
    listItem.appendChild(listBtn);
    

    listBtn.addEventListener('click', function() {
        list.removeChild(listItem);
    });

    input.focus();
});

