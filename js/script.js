/*----- constants -----*/





/*----- app's state (variables) -----*/

let weatherData, fTemp, cTemp;





/*----- cached element references -----*/

const $name = $('#name');

const $weather = $('#weather');

const $temperature = $('#temperature');


/*----- event listeners -----*/
$('form').on('submit', handleGetData);




/*----- functions -----*/
function handleGetData(event) {
    event.preventDefault();
    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?q=Charlottesville&appid=3130b9f6f3c126f9bc6a4a2c72b3f56c'
    }).then(function(data) {
        $name.html(data.name);
        $weather.html(data.weather[0].main);
        fTemp = Math.round(data.main.temp * 9/5 -459.67);
        cTemp = Math.round(data.main.temp  - 273.15);
        $temperature.html(fTemp + ' F (' + cTemp + ' C)');
    }, function(error) {
        console.log(error);
    });
}