'use strict';

function Frame() {
  this.firstRoll = null
  this.secondRoll = null
  this.frameScore = 0
  this.frameCompleted = false
}

var frame = new Frame

Frame.prototype.isFrameCompleted = function() {
  if (frame.isStrike()) {
    return this.frameCompleted = true
  } else if (frame.firstRoll !== null && frame.secondRoll !== null) {
    return this.frameCompleted = true
  } else {
    return this.frameCompleted = false
  }
}

Frame.prototype.doFirstRoll = function(pins) {
  return this.firstRoll = pins
}

Frame.prototype.doSecondRoll = function(pins) {
  return this.secondRoll = pins
}

Frame.prototype.isStrike = function() {
  if (this.firstRoll === 10) {
    return true
  } else {
    return false
  }
}

Frame.prototype.isSpare = function(pins) {
  if ((this.firstRoll + this.secondRoll) === 10) {
    return true
  } else {
    return false
  }
}
