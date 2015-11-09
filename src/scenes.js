Crafty.scene('Game', function() {
  generateSegment();

  var player = Crafty.e('PlayerCharacter')
    .attr({
      x: 0,
      y: (Game.map_grid.height-3) * Game.map_grid.tile.height,
      dX: 3,
      dY: 0})
    .bind('EnterFrame', function(){
      console.log('MoveRight called.');
      if( this.x > Game.map_grid.width * Game.map_grid.tile.width) {
        this.x = 0;
      }
      this.x += this.dX;
    });

}, function() {

});

function generateSegment() {
  //Generte the Floor
  for (var i = 0; i < Game.map_grid.width; i++ ) {
    Crafty.e("Floor")
      .attr({ x: i * Game.map_grid.tile.width, y: Game.height() - Game.map_grid.tile.height });
  }

  var npc = Crafty.e('NonPlayerCharacter')
    .attr({
      x: (Game.map_grid.width - 4) * Game.map_grid.tile.width,
      y: (Game.map_grid.height - 3) * Game.map_grid.tile.height
    });
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
