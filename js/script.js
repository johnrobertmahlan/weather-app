/*----- constants -----*/





/*----- app's state (variables) -----*/





/*----- cached element references -----*/

const $name = $('#name');

//const $weather1 = $('#weather.main');

//const $weather2 = $('#weather.description');




/*----- event listeners -----*/
$('form').on('submit', handleGetData);




/*----- functions -----*/
function handleGetData(event) {
    event.preventDefault();
    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?q=Charlottesville&appid=3130b9f6f3c126f9bc6a4a2c72b3f56c'
    }).then(function(data) {
        console.log(data);
        $name.html(data.name);
        //$weather1.html(data.weather.main);
        //$weather2.html(data.weather.description);   
    }, function(error) {
        console.log(error);
    });
}
