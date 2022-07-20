const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const humidity = document.querySelector('#humidity');
const day2 = document.querySelector('#day2');
const day3 = document.querySelector('#day3');
const day4 = document.querySelector('#day4');

const url = `https://api.openweathermap.org/data/2.5/weather?q=Meridian&units=Imperial&appid=32617c259650e10eaa9bd75c5735e050`;

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
    currentTemp.innerHTML = weatherData.main.temp.toFixed(1);
    humidity.innerHTML = weatherData.main.humidity;

    const imagesrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
    weatherIcon.setAttribute('src', imagesrc);
    weatherIcon.setAttribute('alt', desc);
    
    captionDesc.innerHTML = desc;

}