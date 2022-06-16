const d = new Date();
const year = d.getFullYear();

document.querySelector('#year').innerHTML = year;

const modified = document.lastModified;

document.querySelector('#modified').textContent = modified;

// select the elements to manipulate (output to)
const datefield = document.querySelector(".date");


// derive the current date using a date object
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(d);

// long, medium, short options ... try them

datefield.innerHTML = `<em>${fulldate}</em>`;