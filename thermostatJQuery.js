$( document ).ready(function() {

  var thermostat;

  $( "#increase" ).click(function( event ) {
      thermostat.increase(1);
      updateTemperatureDisplay()
      updateDisplayColour ()
      sendTempToServer()
  });

  $( "#decrease" ).click(function( event ) {
      thermostat.decrease(1);
      updateTemperatureDisplay()
      updateDisplayColour ()
      sendTempToServer()
  });

  $( "#reset" ).click(function( event ) {
      thermostat.reset();
      updateTemperatureDisplay()
      updateDisplayColour ()
      sendTempToServer()
  });

  $( "#powerSaveSwitch" ).click(function( event ) {
      thermostat.powerSaveSwitch();
      updatePowerModeStatusDisplay()
  });

  $("select").change(function(event) {
    getWeather(this.value)
  });

  function updateTemperatureDisplay() {
    $("#temperature").text(thermostat.value());
  }

  function updateDisplayColour () {
    $("body").css({"background-color":thermostat.displayColour()});
  }

  function updatePowerModeStatusDisplay() {
    $("#powerSaveSwitch").attr("style", function(){
      if (thermostat.powerSaveStatus)
        return "color:green"
      else
        return "color:red"
    });
  }


  function getWeather(city) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?id=' + city + '&APPID=0ea98111060a61f6a3408109332873c0&units=metric';
    $.get(url, function(response) {
        $("#weatherTemp").text(response.main.temp);
    });
  }

  function getTempFromServer() {
    var url = 'http://localhost:4567/temperature';
    $.ajax({
        type: "GET",
        url: url,
        dataType: "html",
        success: function(data){
          thermostat = new Thermostat(data);
            updateTemperatureDisplay()
            updatePowerModeStatusDisplay()
            updateDisplayColour ()
            getWeather("2643743")
        },
        error: function(data){
          thermostat = new Thermostat(20);
          updateTemperatureDisplay()
          updatePowerModeStatusDisplay()
          updateDisplayColour ()
          getWeather("2643743")
        }
    }).done(function(data){

    });
  }

  function sendTempToServer() {
    var url = 'http://localhost:4567/temperature?temp=' + thermostat.value();
    $.post(url);
  }

  getTempFromServer()

});
