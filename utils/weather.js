const axios = require('axios');

let APIKEY = '6877bd8e50cea961dd23699a7be8b140';

// config for Celcius: units=metric - needs to double check
// config for Fahrenheit unit: units=imperial 

module.exports = async (location, cmd_type) => {
    let cmd = cmd_type;
    let type = "weather";

    if (cmd === "today") {
        type = "weather";
    } else if (cmd === "forecast") {
        type = "forecast";
    }

    // console.log(`http://api.openweathermap.org/data/2.5/${type}?q=${location}&units=imperial&appid=${APIKEY}`);

    let weather = axios.get(`http://api.openweathermap.org/data/2.5/${type}?q=${location}&units=imperial&appid=${APIKEY}`)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log(error);
        })

    return weather;
}