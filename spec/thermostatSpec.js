describe("Feature test:", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

    describe("initialization", function() {
      it("starts at 20 degrees", function() {
        expect(thermostat.value()).toEqual(20)
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
        thermostat.decrease(10)
        expect(function() {thermostat.decrease(1)}).toThrowError("Minimum temperature is 10")
      });
    });
});
