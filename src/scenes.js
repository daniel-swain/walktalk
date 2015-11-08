Crafty.scene('Game', function() {

}, function() {

});

Crafty.scene('Success', function() {

}, function() {

});

Crafty.scene('Loading', function() {
  Crafty.e('2D, DOM, Text')
    .text('Loading, please wait...')
    .attr({ x: 0, y: Game.height()/2, w: Game.width() })
    .css({"text-align": "center"});

  // Future assets will be loaded here.

  //Crafty.scene('MainMenu');
});

Crafty.scene('MainMenu', function() {

}, function() {

});
