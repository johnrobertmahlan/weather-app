/*----- constants -----*/





/*----- app's state (variables) -----*/

let weatherData, userInput, fTemp, cTemp;





/*----- cached element references -----*/

const $name = $('#name');

const $weather = $('#weather');

const $temperature = $('#temperature');

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
    fTemp = Math.round(weatherData.main.temp * 9/5 -459.67);
    cTemp = Math.round(weatherData.main.temp  - 273.15);
    $temperature.html(fTemp + ' F (' + cTemp + ' C)');
};