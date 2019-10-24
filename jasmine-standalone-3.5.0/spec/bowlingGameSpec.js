'use strict;'

describe("BowlingGame", function() {
      var bowlingGame = new BowlingGame

      beforeEach(function() {
        bowlingGame = new BowlingGame
      })

    describe("addScore", function() {
      it("addScore 5 equals 5", function() {
        bowlingGame.addScore(5)
        expect(bowlingGame.viewScore()).toEqual(5)
      })
    })

    describe("score", function() {
      it("calculates a total score of zero points", function() {
        for (var i = 0; i < 20; i++) {
          bowlingGame.addScore(0)
        }
        expect(bowlingGame.viewScore()).toEqual(0)
      })

      it("calculates a total score of 300 points", function() {
        for (var i = 0; i < 20; i++) {
          bowlingGame.addScore(2)
        }
        expect(bowlingGame.viewScore()).toEqual(40)
      })
    })

})
