describe("Feature test:", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe("initialization", function() {
    it("starts at 20 degrees", function() {
      expect(thermostat.currentTemperature()).toEqual(thermostat.RESET_VALUE)
    });
  });

  describe("changing temperature", function() {
    it("can increase the temperature with the up button", function() {
      thermostat.increase(3)
      expect(thermostat.currentTemperature()).toEqual(thermostat.RESET_VALUE + 3)
    });

    it("can decrease the temperature with the down button", function() {
      thermostat.decrease(3)
      expect(thermostat.currentTemperature()).toEqual(thermostat.RESET_VALUE - 3)
    });

    it("throws an error if try to change temp to below 10", function() {
      thermostat.decrease(thermostat.MINIMUM_VALUE)
      error = "Minimum temperature is " + thermostat.MINIMUM_VALUE
      expect(function() {thermostat.decrease(1)}).toThrowError(error)
    });
  });

  describe("power saving mode on", function() {
    it("is on by default", function() {
      expect(thermostat.maxTemp()).toEqual(thermostat.MAX_WITH_POWER_MODE_ON)
    });

    it("throws an error when temperature goes above 25 degrees", function() {
      thermostat.adjustMaxTemp(true)
      thermostat.increase(5)
      error = "Max temp is " + thermostat.MAX_WITH_POWER_MODE_ON
      expect(function() {thermostat.increase(1)}).toThrowError(error)
    });
  });

  describe("power saving mode onff", function() {
    it("throws an error when temperature goes above 32 degrees", function() {
        thermostat.adjustMaxTemp(false)
        thermostat.increase(12)
        error = "Max temp is " + thermostat.MAX_WITH_POWER_MODE_OFF
        expect(function() {thermostat.increase(1)}).toThrowError(error)
    });
  });

  describe("reset button", function() {
    it("resets temperature to 20", function() {
      thermostat.reset()
      expect(thermostat.currentTemperature()).toEqual(thermostat.RESET_VALUE)
    })
  });

  describe("display colour", function() {
    it("displays green if temperature is less than 18", function() {
      thermostat.decrease(3)
      expect(thermostat.displayColour()).toEqual(thermostat.GREEN_ID)
    });

    it("displays yellow if temperature is less than 25", function() {
      thermostat.increase(4)
      expect(thermostat.displayColour()).toEqual(thermostat.YELLOW_ID)
    });

    it("displays red if temperature is >= to 25", function() {
      thermostat.increase(5)
      expect(thermostat.displayColour()).toEqual(thermostat.RED_ID)
    });
  });
});
