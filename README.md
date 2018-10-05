# weather-app
A NodeJS application to get the details of the weather by providing the address

# To execute:
1. Clone the repository.
2. Execute `npm i` to install all the dependencies.
3. Create a file called .env in the weather-app folder and store Google Geocode API and forecast.io weather API as<br>
    API_KEY_GC<br>
    API_KEY_WEATHER<br>
    
4.run `node app.js -a "address"` to get the weather details of the address entered.

Ex. `node app.js -a "Electronic City,Bengaluru,560100"`,<br>
    `node app.js -a 560048`

The weather-app gets the address from the user and converts the loction into latitude and longitudes using Google maps Geocode API and<br>
fetches the weather details from the forecast.io API.

