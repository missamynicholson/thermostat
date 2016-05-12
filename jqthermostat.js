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
    this.value
  })


  updateTemperatureDisplay()
  updateDisplayColour ()
  updatePowerModeDisplay ()

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
