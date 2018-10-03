const yargs = require('yargs');
const geocode = require("./geocode/geocode");

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
        console.log(JSON.stringify(results,undefined,2));
    }
});

