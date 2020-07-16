/* eslint-disable no-unused-vars */
/* eslint-disable import/no-mutable-exports */
/* eslint-disable import/no-unresolved */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import regeneratorRuntime from 'regenerator-runtime';

let isCel = true;
let deg;
let celDeg;
let ferDeg;

const render = (data) => {
  const icon = 'http://openweathermap.org/img/wn/10d@2x.png';
  const card = document.getElementById('detailsCard');
  card.classList = 'card bg-secondary text-white mx-auto my-3';
  const cel = +(`${Math.round(`${data.main.temp - 273.15}e+2`)}e-2`);
  celDeg = `${cel} °C `;
  const fer = +(`${Math.round(`${(data.main.temp - 273.15) * 1.8000 + 32.00}e+2`)}e-2`);
  ferDeg = `${fer} °F `;

  deg = isCel ? celDeg : ferDeg;
  document.getElementById('card-header').innerHTML = `${data.name}  ${data.sys.country}`;
  document.getElementById('card-title').innerHTML = `${deg}`;
  document.getElementById('card-info').innerHTML = `${data.weather[0].description}`;
  document.getElementById('card-img').setAttribute('src', `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
};

async function getWeather(city) {
  const celcius = '&units=metric';
  const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9ea09122bccc9868a9ac88372ec1ff65`, { mode: 'cors' });
  const data = await res.json();
  // eslint-disable-next-line no-alert
  if (data.cod === 200) { render(data); } else { alert('Enter Valid city name'); }
}


document.getElementById('searchForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const city = document.getElementById('cityName').value;
  const card = document.getElementById('detailsCard');
  card.classList = 'card bg-light my-3 d-none';
  getWeather(city);
  document.getElementById('cityName').value = '';
});

document.getElementById('tempToggle').addEventListener('click', (e) => {
  e.preventDefault();
  isCel = !isCel;
  deg = isCel ? celDeg : ferDeg;
  document.getElementById('card-title').innerHTML = `${deg}`;
});

getWeather('madurai');