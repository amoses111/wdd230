const t = 40;
const s = 5;

document.querySelector('#windspeed').innerHTML = s;
document.querySelector('#temperature').innerHTML = t;


if (t <= 50 && s <= 5) {
    const f = Math.round(35.74+(0.6215*t)-35.75*(Math.pow(s, 0.16))+0.4275*t*(Math.pow(s, 0.16))); 
    document.querySelector('#windchill').innerHTML = f;
}
else {
    const f = "N/A";
    document.querySelector('#windchill').innerHTML = f;
}

