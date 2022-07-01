let date = new Date();
const meet = date.getDay(4);
const quote = 'Come join us for our meet and greet!';

if (meet == 4 || meet == 2) {
    let header = document.getElementById('header');
    let span = document.createElement('span');
    span.setAttribute('id', 'meet');
    insertAfter(span, header);
    document.querySelector('#meet').innerHTML = quote;
} 
