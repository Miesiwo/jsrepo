const axios = require('axios');
let a = 0;
const apiKey = 'ade4109353483560bc671b9c447f34a6'; 

const getWeatherData = async (city) => {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?id=${city}&appid=${apiKey}`;
    const response = await axios.get(url);
    const weatherData = response.data;
    console.log(weatherData.name +" ",Math.round(weatherData.main.temp - 273.15));
  } catch (error) {
    console.error('Помилка отримання даних про погоду:', error);
  }
  
};

let cities = [703448,702658,709717]
console.log("City", "Temperature")
console.log("City", "Temperature")

console.log("City", "Temperature")
console.log("City", "Temperature")
console.log("City", "Temperature")
console.log("City", "Temperature")

console.log("City", "Temperature")
console.log("City", "Temperature")
console.log("City", "Temperature")

console.log("City", "Temperature")
console.log("City", "Temperature")
console.log("City", "Temperature")
console.log("City", "Temperature")
console.log("City", "Temperature")
cities.forEach(x=>getWeatherData(x));

console.log("https://api.openweathermap.org\nSachok Vladyslav Vitaliovich")

