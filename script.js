const input = document.querySelector('input')
const inputWrapper = document.querySelector('inputWrapper')
const button = document.querySelector('.submitBtn')
const cityName = document.querySelector('.city')
const temperature = document.querySelector('.degrees')
const humidity = document.querySelector('.humidityValue')
const pressure = document.querySelector('.pressureValue')
const weatherInfo = document.querySelector('.weatherInfo')
const weatherDescription = document.querySelector('.weatherDescription')

const API_KEY = '&appid=ae1e6bfdc3b9af8f7835778901526c10'
const API_URL = 'https://api.openweathermap.org/data/2.5/weather?q='
const API_METRIC = '&units=metric'

const getWeather = () => {
  const city = input.value

    if (!city) {
        alert("Wpisz miasto!")
        return
    }

    const url = `${API_URL}${city}${API_KEY}${API_METRIC}`; // + &lang=pl aby zmienić język
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const temp = data.main.temp
            const humidityValue = data.main.humidity
            const pressureValue = data.main.pressure
            const weatherValue = data.weather[0].description
            temperature.innerText = `${Math.floor(temp)}℃`
            humidity.innerText = `${humidityValue}%`
            pressure.innerText = `${pressureValue}hPa`
            weatherDescription.innerText = weatherValue
        })
        .catch((err) => console.log(err));
};


const addWeatherInfo = () => {
    weatherInfo.classList.add("weatherInfo2")
}

const changeCity = () => {
    const newCity = input.value
    cityName.innerText = newCity
}


button.addEventListener('click', getWeather)
button.addEventListener('click', changeCity)
button.addEventListener('click', addWeatherInfo)

