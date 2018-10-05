require('dotenv').config();
const request = require('request');

const key = process.env.API_KEY_WEATHER;

const getWeather = (latitude,longitude,callback)=>{
    request({
        url:`https://api.darksky.net/forecast/${key}/${latitude},${longitude}`,
        json:true
    
    },(err,res,body)=>{
        if(err){
            console.log("Unable to connect to Forecast.io Server",err);
        }else if(res.statusCode == 400){
            console.log("Something went wrong while fetching address/check the internet connection!!!")
        }else{
            callback(undefined,{
                summary:body.currently.summary,
                temperature:((body.currently.temperature-32) * 0.55).toFixed(2) +" deg Celcius",
                humidity:body.currently.humidity * 100 +"%",
                apparentTemperature:((body.currently.apparentTemperature-32) * 0.55).toFixed(2) +" deg Celcius" 
            })
        }
    })
}

module.exports.getWeather = getWeather;
