
//live weather api
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const windSpeed = document.querySelector('#windspeed');

const url = `https://api.openweathermap.org/data/2.5/weather?q=Kennewick&units=Imperial&appid=32617c259650e10eaa9bd75c5735e050`;

apiFetch(url)

async function apiFetch(apiURL) {
    try {
        const response = await fetch(apiURL);
        if (response.ok) {
            const data = await response.json();
            //console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
    
}

function displayResults(weatherData) {
    currentTemp.innerHTML = weatherData.main.temp.toFixed(0);
    windSpeed.innerHTML = weatherData.wind.speed.toFixed(0);

    const imagesrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
    weatherIcon.setAttribute('src', imagesrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.innerHTML = desc.toUpperCase();

    const t = currentTemp.textContent;
    const s = windSpeed.textContent;

    if (t <= 50 && s <= 5) {
        const windChill = Math.round(35.74+(0.6215*t)-35.75*(Math.pow(s, 0.16))+0.4275*t*(Math.pow(s, 0.16))); 
        document.querySelector('#windchill').innerHTML = windChill;
    } else {
        const windChill = "N/A";
        document.querySelector('#windchill').innerHTML = windChill;
    }
}


