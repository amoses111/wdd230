const input = document.querySelector('#favchap');
const button = document.querySelector('#addbutton');

button.addEventListener('click', function() {
    
    const myItem = input.value;
    input.value = '';

    if (myItem !== '') {

        const list = document.querySelector('#ul');
        
        const listItem = document.createElement("li");
        const listText = document.createElement("span");
        const listBtn = document.createElement("button");
        
        listText.textContent = myItem;
        listBtn.textContent = '❌';
        listItem.appendChild(listText);
        listItem.appendChild(listBtn);
        list.appendChild(listItem);
        

        listBtn.addEventListener('click', function() {
            list.removeChild(listItem);
        });

    };

    input.focus();
});

    
    

