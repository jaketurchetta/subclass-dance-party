describe('pulsatingDancer', function() {

  var pulsatingDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    pulsatingDancer = new makePulsatingDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(pulsatingDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should constantly change color', function() {
    // sinon.spy(pulsatingDancer.$node, 'toggle');
    var prevColor = pulsatingDancer.$node.css('background-color');
    console.log(prevColor);
    pulsatingDancer.step();
    var newColor = pulsatingDancer.$node.css('background-color');
    console.log(newColor);
    expect(prevColor).to.not.equal(newColor);
  });

  it('should increase in size on mouseover', function() {
    // sinon.spy(pulsatingDancer.$node, 'toggle');
    pulsatingDancer.step();
    var prevSize = pulsatingDancer.$node.css('height');
    while (pulsatingDancer.$node.mouseover()) {
      var newSize = pulsatingDancer.$node.css('height');
      break;
    };

    expect(prevSize).to.not.equal(newSize);
    expect(newSize).to.equal('100px');
  });


  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(pulsatingDancer, 'step');
      expect(pulsatingDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(pulsatingDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(pulsatingDancer.step.callCount).to.be.equal(2);
    });
  });
});
