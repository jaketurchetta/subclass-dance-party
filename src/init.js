$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );

    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });

  $('.button').on('click', function(event) {
    var styleSettings;

    for (var i = 0; i < window.dancers.length; i++) {
      styleSettings = {
        left: 50
      };

      //debugger;
      window.dancers[i].left = styleSettings.left;
      //window.dancers[i].$node.animate(styleSettings, 2000);
      window.dancers[i].$node.css(styleSettings);
    }
  });

  $('#divide').on('click', function(event) {
    var pageWidth = $("body").width();
    var increment = pageWidth / window.dancers.length;
    var styleSettings;

    for (var i = 0; i < window.dancers.length; i++) {
      styleSettings = {
        left: increment * i,
        top: $("body").height() / 2,
      };

      //debugger;
      window.dancers[i].left = styleSettings.left;
      window.dancers[i].top = styleSettings.top;
      //window.dancers[i].$node.animate(styleSettings, 2000);
      window.dancers[i].$node.css(styleSettings);
    }
  });
});