const d = new Date();
const year = d.getFullYear();

document.querySelector('#year').innerHTML = year;

const modified = document.lastModified;

document.querySelector('#modified').textContent = modified;

