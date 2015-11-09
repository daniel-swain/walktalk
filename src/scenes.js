Crafty.scene('Game', function() {
  generateWorld();

  var player = Crafty.e('PlayerCharacter')
    .attr({ x: 0, y: 0});

}, function() {

});

function generateWorld() {
  //Generte the Floor
  for(var i = 0; i < Game.map_grid.width; i++ ) {
    Crafty.e("Floor")
      .attr({ x: i * Game.map_grid.tile.width, y: Game.height() - Game.map_grid.tile.height });
  }
}

Crafty.scene('Loading', function() {

  Crafty.background('rgb(226, 226, 226)');
  Crafty.e('GameText')
    .text('Loading, please wait...')
    .attr({ x: 0, y: Game.height()/2, w: Game.width() });

  // Future assets will be loaded here.

  console.log('Finished Loading. Switching to MainMenu.');
  Crafty.scene('MainMenu');
});

var ppc = 13;
Crafty.scene('MainMenu', function() {
  Crafty.background('rgb(93, 93, 93)');

  // Main Title
  Crafty.e('GameText')
    .text('WalkTalk')
    .attr({ x: Game.width()/2.5, y: Game.height()/3 });

  // Start Button
  Crafty.e('MenuOption')
    .text('Start Game')
    .attr({ h: 28, w: 11.5 * ppc, x: Game.width()/3 , y: Game.height()/2 })
    .bind('Click', function(MouseEvent) {
      console.log('Switching to Game Scene.');
      Crafty.scene('Game');
    });
});
