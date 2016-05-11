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
  });
