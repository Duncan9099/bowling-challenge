'use strict';

function Frame() {
  this.firstRoll = null
  this.secondRoll = null
  this.frameScore = 0
  this.frameCompleted = false
  this.MAX_FIRST_ROLL = 10
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
  if (pins > this.MAX_FIRST_ROLL) {
    return false
  } else {
    return this.firstRoll = pins
  }
}

Frame.prototype.doSecondRoll = function(pins) {
  if (pins > frame.maxSecondRoll(pins)) {
    return false
  } else {
    return this.secondRoll = pins
  }
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

Frame.prototype.checkScore = function() {
  if (frame.isStrike()) {
    return this.score = 'Strike'
  } else if (frame.isSpare()) {
    return this.score = 'Spare'
  } else {
    return this.score = this.firstRoll + this.secondRoll
  }
}

Frame.prototype.maxSecondRoll = function(pins) {
  return (10 - this.firstRoll)
}
