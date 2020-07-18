/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import regeneratorRuntime from 'regenerator-runtime';
import getWeather from './weather_api';

document.getElementById('searchForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const city = document.getElementById('cityName').value;
  const card = document.getElementById('detailsCard');
  card.classList = 'card bg-light my-3 d-none';
  getWeather(city);
  document.getElementById('cityName').value = '';
});


getWeather('madurai');