const windchill = document.querySelector('#windchill').innerHTML = f;
const windspeed = document.querySelector('#windspeed').innerHTML = s;
const temp = document.querySelector('#temperature').innerHTML = t;

const t = 40;
const s = 5;
const f = '';

if (t <= 50 && s <= 3) {
    const f = 35.74+(0.6215*t)-35.75*(Math.pow(s, 0.16))+0.4275*t*(Math.pow(s, 0.16));
}
else {
    f = "N/A";
}

