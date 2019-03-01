const ora = require('ora');
const getWeather = require('../utils/weather');

module.exports = async (args) => {
    const spinner = ora().start();
    
    try {
        const location = args.location;
        const weather = await getWeather(location, 'forecast');

        spinner.stop();

        console.log(`Forecast for ${location}:`);
        console.log(weather.list.forEach(element => {
            console.log(element.main.temp);
        }));

    } catch (err) {
        spinner.stop();

        console.error(err);
    }
}

// const axios = require('axios');

// let APIKEY = '6877bd8e50cea961dd23699a7be8b140';

// module.exports = async (location) => {
//     let weather = axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${location},us&appid=${APIKEY}`)
//         .then((response) => {
//             return response.data
//         })
//         .catch((error) => {
//             console.log(error);
//         })

//     return weather;
// }