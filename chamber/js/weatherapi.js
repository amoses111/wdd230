const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');


const url = `https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=Imperial&appid=32617c259650e10eaa9bd75c5735e050`;

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

    const imagesrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
    weatherIcon.setAttribute('src', imagesrc);
    weatherIcon.setAttribute('alt', desc);
    
    captionDesc.innerHTML = desc;
    desc[0].toUppercase() + desc.substring(1);
}