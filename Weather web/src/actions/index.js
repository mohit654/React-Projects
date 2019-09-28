import axios from 'axios'; // Just like ajax

const API_KEY = '38e2889a6c6f06d246f57edcceb23f88';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    //console.log('Request:',request);
    
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}