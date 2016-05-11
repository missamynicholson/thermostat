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

Thermostat.prototype.decrease = function(amount) {
  if(this.belowMinimum(amount)) {
    throw new Error("Minimum temperature is 10")
  } else {
    this.temperature -= amount
  }
}

Thermostat.prototype.belowMinimum = function(amount) {
  return ((this.temperature - amount) < 10)
}
