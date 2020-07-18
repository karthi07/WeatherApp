import render from './dom';

export default async function getWeather(city) {
  const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9ea09122bccc9868a9ac88372ec1ff65`, { mode: 'cors' });
  const data = await res.json();
  // eslint-disable-next-line no-alert
  if (data.cod === 200) { render(data); } else { alert('Enter Valid city name'); }
}
