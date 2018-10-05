require('dotenv').config();
const request = require('request');

const key = process.env.API_KEY_GC;

const geocodeRequest = (address,callback) =>{

    const encodedAddress = encodeURIComponent(address);
    
    request({
        url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress},+CA&key=${key}`,
        json:true
    },(error,response,body)=>{
        if(error){
            callback(error);
        }else if (body.status === 'ZERO_RESULTS'){
            callback('Undable to find address');
        }else if (body.status === 'OK'){
            callback(undefined,{
                address:body.results[0].formatted_address,
                latitude:body.results[0].geometry.location.lat,
                longitude:body.results[0].geometry.location.lng
            });
        }
        else{
            console.log("::::",response.body.error_message);
        }
    });
}

module.exports.geocodeRequest = geocodeRequest;