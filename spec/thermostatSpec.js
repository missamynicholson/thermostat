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
    });
});
