const ora = require('ora');
const getWeather = require('../utils/weather');

module.exports = async (args) => {
    const spinner = ora().start();
    
    try {
        const location = args.location || args.l;
        const weather = await getWeather(location, 'forecast');

        spinner.stop();

        console.log(`Forecast for ${location}:`);

        for (let i = 0; i < weather.list.length; i+=8) {
            console.log(`${weather.list[i].dt_txt} - Low: ${weather.list[i].main.temp_min}° | High: ${weather.list[i].main.temp_max}° | ${weather.list[i].weather[0].main}`);
        }
    } catch (err) {
        spinner.stop();

        console.error(err);
    }
}