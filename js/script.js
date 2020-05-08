/*----- constants -----*/





/*----- app's state (variables) -----*/

let weatherData, userInput, fTemp, fTempMin, fTempMax, cTemp, cTempMin, cTempMax;





/*----- cached element references -----*/

const $name = $('#name');

const $weather = $('#weather');

const $temperature = $('#temperature');

const $lowTemp = $('#low-temp');

const $highTemp = $('#high-temp');

const $input = $('input[type="text"]')


/*----- event listeners -----*/
$('form').on('submit', handleGetData);




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
    $name.html(weatherData.name);
    $weather.html(weatherData.weather[0].main);

    // Calculating these temperatures like this because the data structure for the API calls for Fahrenheit and Celsius temperatures was far more complicated, since it gave you a list of multiple cities with the same name every time

    fTemp = Math.round(weatherData.main.temp * 9/5 - 459.67);
    fTempMin = Math.round(weatherData.main.temp_min * 9/5 - 459.67);
    fTempMax = Math.round(weatherData.main.temp_max * 9/5 - 459.67);
    cTemp = Math.round(weatherData.main.temp  - 273.15);
    cTempMin = Math.round(weatherData.main.temp_min - 273.15);
    cTempMax = Math.round(weatherData.main.temp_max - 273.15);
    $temperature.html(fTemp + ' F (' + cTemp + ' C)');
    $lowTemp.html(fTempMin + ' F (' + cTempMin + ' C)');
    $highTemp.html(fTempMax + 'F (' + cTempMax + ' C)');
};