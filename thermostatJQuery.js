$( document ).ready(function() {
  thermostat = new Thermostat();
      $( "#increase" ).click(function( event ) {
          thermostat.increase(1);
          $("#temperature").text(thermostat.value());
          $("body").attr("style", function(){
            return "background-color:" + thermostat.displayColour() + ";"
          });
      });
      $( "#decrease" ).click(function( event ) {
          thermostat.decrease(1);
          $("#temperature").text(thermostat.value());
          $("body").attr("style", function(){
            return "background-color:" + thermostat.displayColour() + ";"
          });
      });
      $( "#reset" ).click(function( event ) {
          thermostat.reset();
          $("#temperature").text(thermostat.value());
          $("body").attr("style", function(){
            return "background-color:" + thermostat.displayColour() + ";"
          });
      });

      $( "#powerSaveSwitch" ).click(function( event ) {
          thermostat.powerSaveSwitch();
          $("#powerModeStatus").text(function() {
            if (thermostat.powerSaveStatus)
              return "On"
            else
            return "Off"
          })
      });

      $("#temperature").text(thermostat.value());

      $("#powerModeStatus").text(function() {
        if (thermostat.powerSaveStatus)
          return "On"
        else
        return "Off"
      })

      $("body").attr("style", function(){
        return "background-color:" + thermostat.displayColour() + ";"
      });

      // var cities = document.getElementById("cities"),
      //   city = cities.options[cities.selectedIndex].value;

      var select = document.forms[0].cities;
      select.onchange = function(){
        var value = select.options[select.selectedIndex].value;
        getWeather(value)
      }

      function getWeather(city) {
        var url = 'http://api.openweathermap.org/data/2.5/weather?id=' + city + '&APPID=0ea98111060a61f6a3408109332873c0&units=metric'; 
        console.log(url);
        $.ajax({
        json: "callback",
        url: url,
        dataType: "json",
        success: function(response) {
          $("#weatherTemp").text(function() {
            console.log(response.main.temp);
            return response.main.temp + " C";
          });
        }
        });
      }
});
