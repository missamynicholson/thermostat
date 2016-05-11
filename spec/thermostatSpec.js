describe("Feature test:", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe("initialization", function() {
    it("starts at 20 degrees", function() {
      expect(thermostat.value()).toEqual(thermostat.STARTING_VALUE)
    });
  });

  describe("changing temperature", function() {
    it("can increase the temperature with the up button", function() {
      thermostat.increase(3)
      expect(thermostat.value()).toEqual(thermostat.STARTING_VALUE + 3)
    });

    it("can decrease the temperature with the down button", function() {
      thermostat.decrease(3)
      expect(thermostat.value()).toEqual(thermostat.STARTING_VALUE - 3)
    });

    it("throws an error if try to change temp to below 10", function() {
      thermostat.decrease(thermostat.MINIMUM_VALUE)
      expect(function() {thermostat.decrease(1)}).toThrowError("Minimum temperature is 10")
    });
  });

  describe("power saving mode on", function() {
    it("is on by default", function() {
      expect(thermostat.maxTemp()).toEqual(25)
    });

    it("throws an error when temperature goes above 25 degrees", function() {
      thermostat.togglePowerSave(true)
      thermostat.increase(5)
        expect(function() {thermostat.increase(1)}).toThrowError("Max temp is 25")
    });
  });

  describe("power saving mode onff", function() {
    it("throws an error when temperature goes above 32 degrees", function() {
        thermostat.togglePowerSave(false)
        thermostat.increase(12)
        expect(function() {thermostat.increase(1)}).toThrowError("Max temp is 32")
    });
  });

  describe("reset button", function() {
    it("resets temperature to 20", function() {
      thermostat.reset()
      expect(thermostat.value()).toEqual(this.STARTING_VALUE)
    })
  });

  describe("display colour", function() {
    it("displays green if temperature is less than 18", function() {
      thermostat.decrease(3)
      expect(thermostat.displayColour()).toEqual("green")
    });

    it("displays yellow if temperature is less than 25", function() {
      thermostat.increase(4)
      expect(thermostat.displayColour()).toEqual("yellow")
    });

    it("displays red if temperature is greater than or equal to 25", function() {
      thermostat.increase(5)
      expect(thermostat.displayColour()).toEqual("red")
    });
  });
});
