// initialize display elements
let elapsed = document.querySelector("#lastVisit");

// get the stored value in localStorage
let lastvisit = Number(window.localStorage.getItem("lastvisit"));
let numVisits = Number(window.localStorage.getItem("visits-ls"));

// Calculate time between visits
const currentvisit = Date.now() - lastvisit;

// Convert time between visits into days
const daysbetween = currentvisit / (1000 * 60 *60 * 24);

// Create string update to be returned
if (numVisits !== 0) {
    elapsed.textContent = `${Math.round(daysbetween)}`;
} else {
    elapsed.textContent = `This is your first visit`;
}

// increment the number of visits.
numVisits++;

// store the lastvisit and visits-ls data.
localStorage.setItem("lastvisit", Date.now());
localStorage.setItem("visits-ls", numVisits);