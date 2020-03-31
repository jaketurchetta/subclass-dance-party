 var makePulsatingDancer = function(top, left, timeBetweenSteps) {
  this.class = 'pulsatingdancer';
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.assignClick();
  //this.$node = $('<span class="pulsatingDancer"></span>');
  //console.log(this);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.oldStep = this.step;


};

makePulsatingDancer.prototype = Object.create(makeDancer.prototype);
makePulsatingDancer.prototype.constructor = makePulsatingDancer;

makePulsatingDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  //this.$node.fadeIn(100);
  //this.$node.fadeOut(100);
  var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  this.$node.css("background-color", randomColor);
  // this.$node.css("height", '40px');
  // this.$node.css("width", '40px');
};

makePulsatingDancer.prototype.assignClick = function() {
  $(this.$node).on('mouseover', function(event) {
    var styleSettings = {
      height: '100px',
      width: '100px',
    };
    //console.log('hover');

    // for (var i = 0; i < window.dancers.length; i++) {
    //   if (window.dancers[i].class === 'blinkyDancer') {
    //     $(this).animate(styleSettings, 500);
    //   }
    // }

    //?
    $(this).animate(styleSettings);
    $(this).css(styleSettings);
  });

  $(this.$node).on('mouseout', function(event) {
    var styleSettings = {
      height: '40px',
      width: '40px',
    };
    //console.log('hover');

    // for (var i = 0; i < window.dancers.length; i++) {
    //   if (window.dancers[i].class === 'blinkyDancer') {
    //     $(this).animate(styleSettings, 500);
    //   }
    // }

    //?
    $(this).animate(styleSettings);
    $(this).css(styleSettings);
  });
};
