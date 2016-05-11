function Thermostat () {
  this.STARTING_VALUE = 20
  this.temperature = this.STARTING_VALUE
  this.maximumTemperature = 25
}

Thermostat.prototype.value = function() {
  return this.temperature;
}

Thermostat.prototype.increase = function(amount) {
  if(this.aboveMaximum(amount))
    throw new Error("Max temp is " + this.maxTemp())
  else
    this.temperature += amount
}

Thermostat.prototype.decrease = function(amount) {
  if(this.belowMinimum(amount))
    throw new Error("Minimum temperature is 10")
  else
    this.temperature -= amount
}

Thermostat.prototype.belowMinimum = function(amount) {
  return ((this.temperature - amount) < 10)
}

Thermostat.prototype.maxTemp = function() {
  return this.maximumTemperature
}

Thermostat.prototype.togglePowerSave = function(status) {
  if (status)
    this.maximumTemperature = 25
  else
    this.maximumTemperature = 32
}

Thermostat.prototype.aboveMaximum = function(amount) {
  return ((this.temperature + amount) > this.maxTemp())
}

Thermostat.prototype.reset = function() {
  return this.temperature = 20
}
