const request = require('request');
var geocoder;
var map;

request({
    url:'https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyAxQqkdn1IrDUFyP4EU7qFsdHswwttzk34',
    json:true,
    qs:{
        address:'DXC Technology, Bengaluru,Karnataka,560100',
    }
},(err,response,body)=>{
    console.log(`Address: ${body.results[0].formatted_address}`);
    console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
    console.log(`Lattitude: ${body.results[0].geometry.location.lat}`);

})