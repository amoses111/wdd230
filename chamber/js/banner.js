let date = new Date();
const meet = date.getDay();
const quote = 'Come join us for our meet and greet!';

if (meet == 4 || meet == 2) {
    document.querySelector('#meet').innerHTML = quote;
}
