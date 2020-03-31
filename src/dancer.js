// Creates and returns a new makeDancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {
  // use jQuery to create an HTML <span> tag

  this.$node = $(`<span class="${this.class}"></span>`);
  //console.log(this.class);
  this.timeBetweenSteps = timeBetweenSteps;
  this.top = top;
  this.left = left;
  // now that we have defined the makeDancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  //this.step();

  //makeDancer.prototype.setPosition.call(this, top, left);
  //debugger;
  this.setPosition(top, left);
  this.step();
};

makeDancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  ///debugger;

  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

makeDancer.prototype.step = function() {
  // the basic makeDancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

