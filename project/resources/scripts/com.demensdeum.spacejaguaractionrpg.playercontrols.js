function createPlayerControls() {
    var playerControls = {

	initializeIfNeeded : function() {
		if (this.initialized == true) {
			return;
		}
		this.initialized = true;
	},
	step : function() {
		this.initializeIfNeeded();
		var hero = getObject("Hero");
		var speed = 0.4;
		if (isKeyPressed("leftKey")) {
			hero.position.x -= speed;
		}
		if (isKeyPressed("rightKey")) {
			hero.position.x += speed;
		}
		if (isKeyPressed("upKey")) {
			hero.position.z -= speed;
		}
		if (isKeyPressed("downKey")) {
			hero.position.z += speed;
		}
		updateObject(hero);
	}
   };
	return playerControls;
}