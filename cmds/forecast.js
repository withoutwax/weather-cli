const ora = require('ora');
const getWeather = require('../utils/weather');

module.exports = async (args) => {
    const spinner = ora().start();
    
    try {
        const location = args.location;
        const weather = await getWeather(location, 'forecast');

        spinner.stop();

        console.log(`Forecast for ${location}:`);

        for (let i = 0; i < weather.list.length; i+=8) {
            console.log(`${weather.list[i].dt_txt} - Low: ${weather.list[i].main.temp_min}° | High: ${weather.list[i].main.temp_max}° | ${weather.list[i].weather[0].main}`);
        }

        // console.log(weather.list.forEach(element => {
        //     console.log(element.main.temp);
        //     console.log(element.dt_txt);
        // }));

    } catch (err) {
        spinner.stop();

        console.error(err);
    }
}