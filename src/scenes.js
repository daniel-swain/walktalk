Crafty.scene('Game', function() {

}, function() {

});

Crafty.scene('Success', function() {

}, function() {

});

Crafty.scene('Loading', function() {

  Crafty.background('rgb(226, 226, 226)');
  Crafty.e('GameText')
    .text('Loading, please wait...')
    .attr({ x: 0, y: Game.height()/2, w: Game.width() });

  // Future assets will be loaded here.

  Crafty.scene('MainMenu');
});

var ppc = 13;
Crafty.scene('MainMenu', function() {

  Crafty.background('rgb(93, 93, 93)');
  // Main Title
  Crafty.e('GameText')
    .text('WalkTalk')
    .attr({ x: 0, y: Game.height()/3, w: Game.width()});
  // Start Button
  Crafty.e('MenuOption')
    .text('Start Game')
    .attr({h: 28, w: 11.5 * ppc, x: Game.width()/3 , y: Game.width()/3});

}, function() {

});
