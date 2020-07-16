/* eslint-disable no-unused-vars */
/* eslint-disable import/no-mutable-exports */
/* eslint-disable import/no-unresolved */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import regeneratorRuntime from 'regenerator-runtime';


async function getWeather(city) {
  const celcius = '&units=metric';
  const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=##${celcius}`, { mode: 'cors' });
  const data = await res.json();
  console.log(data);
  const card = document.getElementById('detailsCard');
  card.classList = 'card bg-light my-3';
  document.getElementById('card-header').innerHTML = `${data.name}  ${data.sys.country}`;
  document.getElementById('card-title').innerHTML = `${data.main.temp}°C   ${data.weather[0].description}`;
  // console.log(`${data.name} temp: ${data.main.temp}`);
}


document.getElementById('searchForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const city = document.getElementById('cityName').value;
  console.log(city);
  getWeather(city);
});