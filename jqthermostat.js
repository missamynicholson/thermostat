$(document).ready(function() {

  thermostat = new Thermostat();

  $('#increase').click(function(event) {
    thermostat.up(1)
      $('#currentTemperature').text(thermostat.temperature());
      $('body').css({'background-color':thermostat.colour()});
  });

  $('#decrease').click(function(event) {
    thermostat.down(1)
      $('#currentTemperature').text(thermostat.temperature());
      $('body').css({'background-color':thermostat.colour()});
  });

  $('#reset').click(function(event) {
    thermostat.reset()
      $('#currentTemperature').text(thermostat.temperature());
      $('body').css({'background-color':thermostat.colour()});
  });

  $('#powerMode').click(function(event) {
    thermostat.switchPowerMode()
    $('#powerModeStatus').text(thermostat.powerMode())
  });

  $('#powerModeStatus').text(thermostat.powerMode());

  $('#currentTemperature').text(thermostat.temperature());

  $('body').css({'background-color':thermostat.colour()});
});
