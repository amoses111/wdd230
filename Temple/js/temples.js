const requestURL = 'json/data.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        const temples = jsonObject['temples'];
        temples.forEach(displayTemples);
    });


function displayTemples(temple) {
    let card = document.createElement('section');
    card.setAttribute("id", "templesection")
    let h2 = document.createElement('h2');
    h2.setAttribute("id", "templeh2")
    let pa = document.createElement('p');
    pa.setAttribute("id", "templepa")
    let pb = document.createElement('p');
    pb.setAttribute("id", "templepb")
    let pc = document.createElement('p');
    pc.setAttribute("id", "templepc")
    let pd = document.createElement('p');
    pd.setAttribute("id", "templepd")
    let portrait = document.createElement('img');
    portrait.setAttribute("id", "templeimg")

    h2.textContent = `${temple.name}`;
    pa.textContent = `Address: ${temple.address}`;
    pb.textContent = `Phone: ${temple.phonenumber}`;
    pc.textContent = `Current Year Closures: ${temple.closures}`;
    pd.textContent = `History: ${temple.history}`;

    portrait.setAttribute('src', temple.imageurl);
    portrait.setAttribute('alt', `Image of ${temple.name}, image number ${temple.order}`);
    portrait.setAttribute('loading', 'lazy');

    card.appendChild(h2);
    card.appendChild(portrait);
    card.appendChild(pa);   
    card.appendChild(pb);
    card.appendChild(pc);
    card.appendChild(pd);

    document.querySelector('div.cards').appendChild(card);
    
};