$( document ).ready(function() {

  var thermostat;

  $( "#increase" ).click(function( event ) {
      thermostat.increase(1);
      combineFunctions()
      sendTempToServer()
  });

  $( "#decrease" ).click(function( event ) {
      thermostat.decrease(1);
      combineFunctions()
      sendTempToServer()
  });

  $( "#reset" ).click(function( event ) {
      thermostat.reset();
      combineFunctions()
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
    $("#temperature").text(thermostat.currentTemperature());
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
    var siteUrl = "http://api.openweathermap.org/data/2.5/weather?id="
    var appId = "&APPID=0ea98111060a61f6a3408109332873c0&units=metric"
    var url = siteUrl + city + appId;
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
          combineFunctions()
          getWeather("2643743")
        },
        error: function(){
          thermostat = new Thermostat();
          combineFunctions()
          getWeather("2643743")
        }
    });
  }

  function sendTempToServer() {
    var urlString = "http://localhost:4567/temperature?temp="
    var url = urlString + thermostat.currentTemperature();
    $.post(url);
  }

  function combineFunctions() {
    updateTemperatureDisplay()
    updatePowerModeStatusDisplay()
    updateDisplayColour ()
  }

  getTempFromServer()

});
