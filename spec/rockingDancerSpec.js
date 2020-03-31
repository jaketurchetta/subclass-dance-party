describe('rockingDancer', function() {

  var rockingDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    rockingDancer = new makeRockingDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(rockingDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should contantly change vertical location', function() {
    var prevTop = rockingDancer.$node.css('top');
    prevTop = Number(prevTop.substring(0, prevTop.length - 2));
    rockingDancer.step();
    var newTop = rockingDancer.$node.css('top');
    newTop = Number(newTop.substring(0, prevTop.length - 2));
    expect(prevTop).to.not.equal(newTop);
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(rockingDancer, 'step');
      expect(rockingDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(rockingDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(rockingDancer.step.callCount).to.be.equal(2);
    });
  });
});
