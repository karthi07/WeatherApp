/* eslint-disable no-unused-vars */

let isCel = true;
let deg;
let celDeg;
let ferDeg;


export default function render(data) {
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
}

document.getElementById('tempToggle').addEventListener('click', (e) => {
  e.preventDefault();
  isCel = !isCel;
  deg = isCel ? celDeg : ferDeg;
  document.getElementById('card-title').innerHTML = `${deg}`;
});
