const date = new Date();

const year = date.getFullYear();

document.querySelector('#year').innerHTML = year;

const modified = new Date(document.lastModified);

document.querySelector('#modified').innerHTML = modified;








