// --- Base components ---
Crafty.c('Grid', {
  init: function() {
    this.attr({
      w: Game.map_grid.tile.width,
      h: Game.map_grid.tile.height
    });
  },

  at: function(x, y) {
    if (x === undefined && y === undefined) {
      return { x: this.x/Game.map_grid.tile.width, y: this.y/Game.map_grid.tile.height};
    } else {
      this.attr({ x: x * Game.map_grid.tile.width, y : y * Game.map_grid.tile.height });
      return this;
    }
  }
});

Crafty.c('Hoverable', {
  _baseColor: 'rgb(89, 121, 191)',
  _hoverColor: 'rgb(249, 204, 90)',
  init: function() {
    this.requires('Color, Mouse');
    this.color(this._baseColor);
    this.bind("MouseOver", function(e) {
      this._baseColor = this.color();
      this.color(this._hoverColor);
    });
    this.bind("MouseOut", function(e){
      this.color(this._baseColor);
    });
  },
  hoverColor: function(newColor){
    this._hoverColor = newColor;
    return this;
  }
});

Crafty.c('Actor', {
  init: function() {
    this.requires('2D, Canvas, Grid');
  }
});

Crafty.c('Decoration', {
  init: function() {
    this.requires('Actor, Solid');
  }
});

// -----------------------------

// --- Characters ---
Crafty.c('PlayerCharacter', {
  init: function() {
    this.requires('Actor');
  }
});

Crafty.c('NonPlayerCharacter', {
  init: function() {
    this.requires('Actor');
  }
});
// -----------------------------

// --- Decorations ---
Crafty.c('Door', {
  init: function() {

  }
});

Crafty.c('Floor', {
  init: function() {

  }
});

Crafty.c('Wall', {
  init: function() {

  }
});
// -----------------------------
