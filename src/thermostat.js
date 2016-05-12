function Thermostat () {
  this.STARTING_VALUE = 20
  this.MINIMUM_VALUE = 10
  this.temperature = this.STARTING_VALUE
  this.lowUsage = 18
  this.midUsage = 25
  this.MAX_WITH_POWER_MODE_ON = 25
  this.MAX_WITH_POWER_MODE_OFF = 32
  this.maximumTemperature = this.MAX_WITH_POWER_MODE_ON
  this.powerSaveStatus = true;
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
    throw new Error("Minimum temperature is " + this.MINIMUM_VALUE)
  else
    this.temperature -= amount
}

Thermostat.prototype.belowMinimum = function(amount) {
  return ((this.value() - amount) < this.MINIMUM_VALUE)
}

Thermostat.prototype.maxTemp = function() {
  return this.maximumTemperature
}

Thermostat.prototype.togglePowerSave = function(status) {
  if (status)
    this.maximumTemperature = this.MAX_WITH_POWER_MODE_ON
  else
    this.maximumTemperature = this.MAX_WITH_POWER_MODE_OFF
}

Thermostat.prototype.powerSaveSwitch = function() {
  this.powerSaveStatus = !this.powerSaveStatus
  this.togglePowerSave(this.powerSaveStatus)
}

Thermostat.prototype.powerSaveStatus = function() {
  return this.powerSaveStatus
}

Thermostat.prototype.aboveMaximum = function(amount) {
  return ((this.value() + amount) > this.maxTemp())
}


Thermostat.prototype.reset = function() {
  return this.temperature = this.STARTING_VALUE
}

Thermostat.prototype.displayColour = function() {
  if(this.value() < this.lowUsage)
    return "#79d279"
  else if (this.value() < this.midUsage)
    return "#ffd480"
  else
  return "#ff5c33"
}
