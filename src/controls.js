Crafty.c("controls", {	__move: {left: false, right: false, up: false, down: false},		_speed: 3,		init: function() {				Crafty.addEvent(this, "keydown", function(e) {			this.trigger("keydown", e);		});				Crafty.addEvent(this, "keyup", function(e) {			this.trigger("keyup", e);		});				return this;	}});Crafty.c("fourway", {			fourway: function(speed) {		if(speed) this._speed = speed;		var move = this.__move;				this.bind("enterframe", function() {			var old = this.pos(),				changed = false;			if(move.right) {				this.x += this._speed;				changed = true;			}			if(move.left) {				this.x -= this._speed;				changed = true;			}			if(move.up) {				this.y -= this._speed;				changed = true;			}			if(move.down) {				this.y += this._speed;				changed = true;			}						if(changed) this.trigger("change", old);		}).bind("keydown", function(e) {			if(e.keyCode === Crafty.keys.RA || e.keyCode === Crafty.keys.D) {				move.right = true;			}			if(e.keyCode === Crafty.keys.LA || e.keyCode === Crafty.keys.A) {				move.left = true;			}			if(e.keyCode === Crafty.keys.UA || e.keyCode === Crafty.keys.W) {				move.up = true;			}			if(e.keyCode === Crafty.keys.DA || e.keyCode === Crafty.keys.S) {				move.down = true;			}		}).bind("keyup", function(e) {			if(e.keyCode === Crafty.keys.RA || e.keyCode === Crafty.keys.D) {				move.right = false;			}			if(e.keyCode === Crafty.keys.LA || e.keyCode === Crafty.keys.A) {				move.left = false;			}			if(e.keyCode === Crafty.keys.UA || e.keyCode === Crafty.keys.W) {				move.up = false;			}			if(e.keyCode === Crafty.keys.DA || e.keyCode === Crafty.keys.S) {				move.down = false;			}		});				return this;	}});Crafty.c("twoway", {	__move: {left: false, right: false, up: false, falling: false},		twoway: function(speed,jump) {		if(speed) this._speed = speed;		jump = jump || this._speed * 2;				var move = this.__move;				this.bind("enterframe", function() {			var old = this.pos(),				changed = false;			if(move.right) {				this.x += this._speed;				changed = true;			}			if(move.left) {				this.x -= this._speed;				changed = true;			}			if(move.up) {				this.y -= jump;				this._falling = true;				changed = true;			}						if(changed) this.trigger("change", old);		}).bind("keydown", function(e) {			if(e.keyCode === Crafty.keys.RA || e.keyCode === Crafty.keys.D) {				move.right = true;			}			if(e.keyCode === Crafty.keys.LA || e.keyCode === Crafty.keys.A) {				move.left = true;			}			if(e.keyCode === Crafty.keys.UA || e.keyCode === Crafty.keys.W) {				move.up = true;			}		}).bind("keyup", function(e) {			if(e.keyCode === Crafty.keys.RA || e.keyCode === Crafty.keys.D) {				move.right = false;			}			if(e.keyCode === Crafty.keys.LA || e.keyCode === Crafty.keys.A) {				move.left = false;			}		});				return this;	}});