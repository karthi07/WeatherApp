/* eslint-disable no-unused-vars */
/* eslint-disable import/no-mutable-exports */
/* eslint-disable import/no-unresolved */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import regeneratorRuntime from 'regenerator-runtime';


async function getWeather(city) {
  const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9ea09122bccc9868a9ac88372ec1ff65`, { mode: 'cors' });
  const data = await res.json();
  const card = document.getElementById('detailsCard');
  card.classList = 'card bg-light my-3';
  document.getElementById('card-header').innerHTML = city;
  document.getElementById('card-title').innerHTML = `current temp: ${data.main.temp}`;
  // console.log(`${data.name} temp: ${data.main.temp}`);
}


document.getElementById('searchForm').addEventListener('click', (e) => {
  e.preventDefault();
  const city = document.getElementById('cityName').value;
  console.log(city);
  getWeather('madurai');
});