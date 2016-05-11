$( document ).ready(function() {

  thermostat = new Thermostat();

  $( "#increase" ).click(function( event ) {
      thermostat.increase(1);
      updateTemperatureDisplay()
      updateDisplayColour ()
  });

  $( "#decrease" ).click(function( event ) {
      thermostat.decrease(1);
      updateTemperatureDisplay()
      updateDisplayColour ()
  });

  $( "#reset" ).click(function( event ) {
      thermostat.reset();
      updateTemperatureDisplay()
      updateDisplayColour ()
  });

  $( "#powerSaveSwitch" ).click(function( event ) {
      thermostat.powerSaveSwitch();
      updatePowerModeStatusDisplay()
  });

  updateTemperatureDisplay()
  updatePowerModeStatusDisplay()
  updateDisplayColour ()
  getWeather("2643743")

  function updateTemperatureDisplay() {
    $("#temperature").text(thermostat.value());
  }

  function updateDisplayColour () {
    $("body").attr("style", function(){
      return "background-color:" + thermostat.displayColour() + ";"
    });
  }

  function updatePowerModeStatusDisplay() {
    $("#powerSaveSwitch").attr("style", function(){
      if (thermostat.powerSaveStatus)
        return "color:green"
      else
        return "color:red"
    });
  }

  var select = document.forms[0].cities;
  select.onchange = function(){
    var value = select.options[select.selectedIndex].value;
    getWeather(value)
  }

  function getWeather(city) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?id=' + city + '&APPID=0ea98111060a61f6a3408109332873c0&units=metric';
    $.ajax({
      json: "callback",
      url: url,
      dataType: "json",
      success: function(response) {
        $("#weatherTemp").text(function() {
          return response.main.temp;
        });
      }
    });
  }
});
