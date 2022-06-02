/*Create a "windchill.js" file and add it to your "js" folder. The "windchill.js" 
script should get the two input values of temperature and wind speed,
check to make sure they meet the specification limits  (<=50°F and >3.0mph) 
allowed to officially calculate the wind chill, and
either calculate and display the wind chill factor value or display 
"N/A" (not applicable) if the input values did not meet the requirements.
🚑  The formula to calculate the wind chill factor is , 
where f is the wind chill factor in Fahrenheit, 
t is the air average temperature in Fahrenheit, 
and s is the wind speed in miles per hour.


📃 Wind Chill Specification Limits: 
"Wind Chill Temperature is officially defined for temperatures 
at or below 10 °C (50 °F) and wind speeds above 
4.8 kilometers per hour (3.0 mph)."*/

const windchill = document.querySelector('#windchill').innerHTML = f;
const windspeed = document.querySelector('#windspeed').innerHTML = s;
const temp = document.querySelector('#temperature').innerHTML = t;

const t = 40;
const s = 5;

if (t <= 50 && s <= 3) {
    const f = 35.74+(0.6215*t)-35.75*(Math.pow(s, 0.16))+0.4275*t*(Math.pow(s, 0.16));
}
else {
    f = "N/A";
}

