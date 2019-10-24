describe('Frame', function() {
  // var frame = new Frame()

  beforeEach(function() {
    frame = new Frame
  })

  describe('isFrameComplete', function() {
    it('rolls twice to complete a frame', function() {
      frame.roll(2)
      frame.roll(2)
      expect(frame.isFrameCompleted()).toEqual(true)
    })
  })
})
