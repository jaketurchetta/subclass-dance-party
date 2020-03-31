var makeBouncingDancer = function(top, left, timeBetweenSteps) {
  this.class = 'bouncingDancer';
  makeDancer.call(this, top, left, timeBetweenSteps);
  //this.$node = $('<span class="rockingDancer"></span>');
  //console.log(this);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.oldStep = this.step;
};

makeBouncingDancer.prototype = Object.create(makeDancer.prototype);
makeBouncingDancer.prototype.constructor = makeBouncingDancer;

makeBouncingDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this);

  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.

  var styleSettingsDown = {
    top: (this.top) % $("body").height(),
    left: this.left,
  };

  var styleSettingsUp = {
    top: (this.top + 100), //% $("body").height(),
    left: this.left,
  };

  //var top = (this.top + 100) % $("body").height();

  //this.$node.css("box-shadow": "50px 50px 0px black"
  //this.top = top;
  this.$node.animate(styleSettingsUp, 100);


  this.$node.animate(styleSettingsDown, 100);

  //this.$node.css('top', top-100);
};