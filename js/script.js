/*----- constants -----*/





/*----- app's state (variables) -----*/

let userInput, weatherData, fTemp, fTempMin, fTempMax, cTemp, cTempMin, cTempMax;





/*----- cached element references -----*/

const $name = $('#name');

const $temperature = $('#temperature');

//const $tempRange = $('#temp-range');

const $input = $('input[type="text"]');

const $search = $('input[type="submit"]');


/*----- event listeners -----*/
$search.on('click', handleGetData);




/*----- functions -----*/
function handleGetData(event) {
    event.preventDefault();

    userInput = $input.val();
    $input.val('');

    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?q=' + userInput + '&appid=3130b9f6f3c126f9bc6a4a2c72b3f56c'
    }).then(function(data) {
        weatherData = data;
        render();
    }, function(error) {
        console.log(error);
    });
}

function render() {
    // Calculating these temperatures like this because the data structure for the API calls for Fahrenheit and Celsius temperatures was far more complicated, since it gave you a list of multiple cities with the same name every time

    fTemp = Math.round(weatherData.main.temp * 9/5 - 459.67);
    //fTempMin = Math.round(weatherData.main.temp_min * 9/5 - 459.67);
    //fTempMax = Math.round(weatherData.main.temp_max * 9/5 - 459.67);
    cTemp = Math.round(weatherData.main.temp  - 273.15);
    //cTempMin = Math.round(weatherData.main.temp_min - 273.15);
    //cTempMax = Math.round(weatherData.main.temp_max - 273.15);
    $name.html(`Current conditions: <br> <span id="conditions">${weatherData.weather[0].main}</span>`);
    $temperature.html(`Current temperature: <br> <span id="temp">${fTemp} F (${cTemp} C)</span>`);
    //$tempRange.html(`Today's low: ${fTempMin} F (${cTempMin} C) <br> Today's high: ${fTempMax} F (${cTempMax} C)`);
};