function Thermostat () {
  this.STARTING_VALUE = 20
  this.temperature = this.STARTING_VALUE
}

Thermostat.prototype.value = function() {
  return this.temperature;
}

Thermostat.prototype.increase = function(amount) {
  this.temperature += amount
}
