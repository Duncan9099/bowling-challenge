function BowlingGame() {
  this.score = 0
}

BowlingGame.prototype.addScore = function(pins) {
  this.score += pins
}

BowlingGame.prototype.viewScore = function() {
  return this.score
}
