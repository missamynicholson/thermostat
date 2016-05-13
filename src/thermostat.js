function Thermostat (temp = 20) {
  this.RESET_VALUE = 20
  this.MINIMUM_VALUE = 10
  this.temperature = +temp
  this.LOW_USAGE_THRESHOLD = 18
  this.MID_USAGE_THRESHOLD = 25
  this.MAX_WITH_POWER_MODE_ON = 25
  this.MAX_WITH_POWER_MODE_OFF = 32
  this.maximumTemperature = this.MAX_WITH_POWER_MODE_ON
  this.powerSaveStatus = true;
  this.GREEN_ID = "#79d279"
  this.YELLOW_ID = "#ffd480"
  this.RED_ID = "#ff5c33"
}

Thermostat.prototype.currentTemperature = function() {
  return this.temperature;
}

Thermostat.prototype.maxTemp = function() {
  return this.maximumTemperature
}

Thermostat.prototype.powerSaveStatus = function() {
  return this.powerSaveStatus
}

Thermostat.prototype.displayColour = function() {
  if(this.currentTemperature() < this.LOW_USAGE_THRESHOLD)
    return this.GREEN_ID
  else if (this.currentTemperature() < this.MID_USAGE_THRESHOLD)
    return this.YELLOW_ID
  else
    return this.RED_ID
}

Thermostat.prototype.increase = function(amount) {
  if(this.isaboveMaximum(amount))
    throw new Error("Max temp is " + this.maxTemp())
  else
    this.temperature += amount
}

Thermostat.prototype.decrease = function(amount) {
  if(this.isbelowMinimum(amount))
    throw new Error("Minimum temperature is " + this.MINIMUM_VALUE)
  else
    this.temperature -= amount
}

Thermostat.prototype.reset = function() {
  return this.temperature = this.RESET_VALUE
}

Thermostat.prototype.powerSaveSwitch = function() {
  this.powerSaveStatus = !this.powerSaveStatus
  this.adjustMaxTemp(this.powerSaveStatus)
}

Thermostat.prototype.adjustMaxTemp = function(status) {
  if (status)
    this.maximumTemperature = this.MAX_WITH_POWER_MODE_ON
  else
    this.maximumTemperature = this.MAX_WITH_POWER_MODE_OFF
}


Thermostat.prototype.isaboveMaximum = function(amount) {
  return ((this.currentTemperature() + amount) > this.maxTemp())
}


Thermostat.prototype.isbelowMinimum = function(amount) {
  return ((this.currentTemperature() - amount) < this.MINIMUM_VALUE)
}
