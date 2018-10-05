const yargs = require('yargs');
const geocode = require("./geocode/geocode");
const weather = require('./weather/weather');


let argv = yargs
.options({
    a:{
        demand:true,
        alias:'Address',
        describe:'Address of the Location',
    }
})
.help()
.alias('help','h')
.argv

geocode.geocodeRequest(argv.a,(errorMsg,results) => {
    if(errorMsg){
        console.log("Error while connecting to maps api",errorMsg);
    }else{
        console.log(results.address);
        weather.getWeather(results.latitude,results.longitude,(errorMsg,wresults) => {
            if(errorMsg){
                console.log("Error while fetching weather data",errorMsg);
            }else{
                console.log(`It's currently ${wresults.temperature}.But feels like ${wresults.apparentTemperature}. Humidity is ${wresults.humidity}`);
            }
            });
    }
});



