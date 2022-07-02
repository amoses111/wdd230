const requestURL = 'json/data.json';
const cards = document.querySelector('.cards');
const directorydisplay = document.querySelector("article");
const gbutton = document.querySelector("#grid");
const lbutton = document.querySelector("#list");


fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        const companies = jsonObject['companies'];
        companies.forEach(displayCompanies);
    });

gbutton.addEventListener("click", () => {
    display.name = "gdirectory";
    cards.innerHTML = "";
    fetch(requestURL)
    .then(function (response) {
    return response.json();
    })
    .then(function (jsonObject) {
    console.table(jsonObject);  
    const directory = jsonObject['companies'];
    directory.forEach(displayDirectory);
    
    });
});
    
lbutton.addEventListener("click", () => {
    display.name = "ldirectory";
    cards.innerHTML = "";
    fetch(requestURL)
    .then(function (response) {
    return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); 
    const directory = jsonObject['companies'];
    directory.forEach(displayDirectory);
    
    });
});


function displayCompanies(business) {
    let card = document.createElement('section');
    card.setAttribute("id", "directorysection")
    let h2 = document.createElement('h2');
    h2.setAttribute("id", "directoryh2")
    let pa = document.createElement('p');
    pa.setAttribute("id", "directorypa")
    let pb = document.createElement('p');
    pb.setAttribute("id", "directorypb")
    let pc = document.createElement('p');
    pc.setAttribute("id", "directorypc")
    let portrait = document.createElement('img');
    portrait.setAttribute("id", "directoryimg")

    h2.textContent = `${business.name}`;
    pa.textContent = `Address: ${business.address}`;
    pb.textContent = `Phone: ${business.phonenumber}`;
    pc.textContent = `Membership level: ${business.memlevel}`;

    portrait.setAttribute('src', business.imageurl);
    portrait.setAttribute('alt', `Image of ${business.name}, image number ${business.order}`);
    portrait.setAttribute('loading', 'lazy');

    if (display.name == "gdirectory") {
        card.appendChild(h2);
        card.appendChild(portrait);
        card.appendChild(pa);   
        card.appendChild(pb);
        card.appendChild(pc);
    } else {
        card.appendChild(h2);
        card.appendChild(pa);
        card.appendChild(pb);
        card.appendChild(pc);
    }

};
 
