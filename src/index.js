/* eslint-disable no-unused-vars */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import regeneratorRuntime from 'regenerator-runtime';

let isCel = true;
let deg;
let celDeg;
let ferDeg;

const render = (data) => {
  const card = document.getElementById('detailsCard');
  card.classList = 'card bg-secondary text-white mx-auto my-3';
  const {
    main, name, sys, weather, ...rest
  } = data;

  const cel = +(`${Math.round(`${main.temp - 273.15}e+2`)}e-2`);
  celDeg = `${cel} °C `;
  const fer = +(`${Math.round(`${(main.temp - 273.15) * 1.8000 + 32.00}e+2`)}e-2`);
  ferDeg = `${fer} °F `;

  deg = isCel ? celDeg : ferDeg;
  document.getElementById('card-header').innerHTML = `${name}  ${sys.country}`;
  document.getElementById('card-title').innerHTML = `${deg}`;
  document.getElementById('card-info').innerHTML = `${weather[0].description}`;
  document.getElementById('card-img').setAttribute('src', `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`);
};

async function getWeather(city) {
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