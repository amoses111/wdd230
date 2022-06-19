const requestURL = 'json/data.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        const companies = jsonObject['companies'];
        companies.forEach(displayCompanies);
    });


function displayCompanies(business) {
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let pa = document.createElement('p');
    let pb = document.createElement('p');
    let pc = document.createElement('p');
    let portrait = document.createElement('img');

    h2.textContent = `${business.name}`;
    pa.textContent = `Address: ${business.address}`;
    pb.textContent = `Phone: ${business.phone}`;
    pc.textContent = `Membership level: ${business.memlevel}`;

    portrait.setAttribute('src', business.imageurl);
    portrait.setAttribute('alt', `Image of ${business.name}, image number ${business.order}`);
    portrait.setAttribute('loading', 'lazy');

    card.appendChild(h2);
    card.appendChild(pa);
    card.appendChild(pb);
    card.appendChild(pc);
    card.appendChild(portrait);


    document.querySelector('div.cards').appendChild(card);

    
};



