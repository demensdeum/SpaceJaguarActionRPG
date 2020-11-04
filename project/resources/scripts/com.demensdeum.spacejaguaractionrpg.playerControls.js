function CreatePlayerControls(outputTargetName) {
    var playerControls = {

    targetName : outputTargetName,       

	step : function() {
		var target = getObject(this.targetName);
		var speed = 0.4;
		if (isKeyPressed("leftKey")) {
			target.position.x -= speed;
		}
		if (isKeyPressed("rightKey")) {
			target.position.x += speed;
		}
		if (isKeyPressed("upKey")) {
			target.position.z -= speed;
		}
		if (isKeyPressed("downKey")) {
			target.position.z += speed;
		}
		if (isKeyPressed("jumpKey")) {
            var inputText = prompt("Jump?");
            if (inputText == "Yes") {
                exit(1);
            }
        }
		updateObject(target);
	}
   };
	return playerControls;
}
