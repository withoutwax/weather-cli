const ora = require('ora');
const getWeather = require('../utils/weather');

module.exports = async (args) => {
    const spinner = ora().start();

    try {
        // console.log(args);
        const location = args.location;
        const weather = await getWeather(location, 'today');

        spinner.stop();

        // console.log(weather);
        console.log(`Current conditions in ${location}:`);
        console.log(`\t${weather.main.temp}° ${weather.weather[0].main}`);
    } catch (err) {
        spinner.stop();
        console.log(err);
    }
}