/* eslint-disable no-unused-vars */
/* eslint-disable import/no-mutable-exports */
/* eslint-disable import/no-unresolved */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import regeneratorRuntime from 'regenerator-runtime';


async function getWeather(city) {
  const celcius = '&units=metric';
  const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9ea09122bccc9868a9ac88372ec1ff65`, { mode: 'cors' });
  const data = await res.json();
  const icon = 'http://openweathermap.org/img/wn/10d@2x.png';
  const card = document.getElementById('detailsCard');
  card.classList = 'card bg-light my-3';
  const cel = +(`${Math.round(`${data.main.temp - 273.15}e+2`)}e-2`);
  const celDeg = `${cel} °C `;
  const fer = +(`${Math.round(`${(data.main.temp - 273.15) * 1.8000 + 32.00}e+2`)}e-2`);
  const ferDeg = `${fer} °F `;
  document.getElementById('card-header').innerHTML = `${data.name} ${data.main.temp}  ${data.sys.country}`;
  document.getElementById('card-title').innerHTML = `${celDeg} ${ferDeg}`;
  // console.log(`${data.name} temp: ${data.main.temp}`);
  // ${data.weather[0].description}
  // +(Math.round(num + "e+2")  + "e-2")
}


document.getElementById('searchForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const city = document.getElementById('cityName').value;
  console.log(city);
  getWeather(city);
});