var makeRockingDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  //console.log(this);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.oldStep = this.step;
};

makeRockingDancer.prototype = Object.create(makeDancer.prototype);
makeRockingDancer.prototype.constructor = makeRockingDancer;

makeRockingDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this);
  this.$node = $('<span class="rockingDancer"></span>');
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.slideUp();
  this.$node.slideDown();

  var styleSettings = {
    top: this.top,
    left: this.left
  };

  for (var i = 0; i <= 50; i++) {
    styleSettings.left--;
    this.$node.css(styleSettings);
  }

};