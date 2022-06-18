const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        const prophets = jsonObject['prophets'];
        prophets.forEach(displayProphets);
    });


function displayProphets(prophet) {
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let pa = document.createElement('p');
    let pb = document.createElement('p');
    let portrait = document.createElement('img');

    h2.textContent = `${prophet.name} ${prophet.lastname}`;
    pa.textContent = `Date of Birth: ${prophet.birthdate}`;
    pb.textContent = `Place of Birth: ${prophet.birthplace}`;

    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}, Latter-day President number ${prophet.order}`);
    portrait.setAttribute('loading', 'lazy');

    card.appendChild(h2);
    card.appendChild(pa);
    card.appendChild(pb);
    card.appendChild(portrait);


    document.querySelector('div.cards').appendChild(card);

    
};



