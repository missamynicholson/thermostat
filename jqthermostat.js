$(document).ready(function() {

  thermostat = new Thermostat();

  $('#increase').click(function(event) {
    thermostat.up(1)
    updateTemperatureDisplay()
    updateDisplayColour ()
  });

  $('#decrease').click(function(event) {
    thermostat.down(1)
    updateTemperatureDisplay()
    updateDisplayColour ()
  });

  $('#reset').click(function(event) {
    thermostat.reset()
    updateTemperatureDisplay()
    updateDisplayColour ()
  });

  $('#powerMode').click(function(event) {
    thermostat.switchPowerMode()
    updatePowerModeDisplay ()
  });

  $('select').change(function(event) {
    getWeather(this.value)
  })

  updateTemperatureDisplay()
  updateDisplayColour ()
  updatePowerModeDisplay ()

  function getWeather(city) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?id=' + city + '&APPID=0ea98111060a61f6a3408109332873c0&units=metric';  $.get(url,function(wheather) {
      $(cityTemperature).text(wheather.main.temp)
    });
  }

  function updateTemperatureDisplay() {
    $('#currentTemperature').text(thermostat.temperature());
  }

  function updateDisplayColour () {
    $('body').css({'background-color':thermostat.colour()});
  }

  function updatePowerModeDisplay () {
    $('#powerModeStatus').text(thermostat.powerMode());
  }
});
