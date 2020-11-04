function CreatePlayerControls(outputTargetName, outputDelegate) {
    var playerControls = {

    delegate: outputDelegate,
    targetName : outputTargetName,       

	step : function() {
		var target = getObject(this.targetName);
		var speed = 0.4;
		if (isKeyPressed("leftKey")) {
			target.position.x -= speed;
            updateObject(target);
		}
		if (isKeyPressed("rightKey")) {
			target.position.x += speed;
            updateObject(target);
		}
		if (isKeyPressed("upKey")) {
			target.position.z -= speed;
            updateObject(target);
		}
		if (isKeyPressed("downKey")) {
			target.position.z += speed;
            updateObject(target);
		}
		if (isKeyPressed("jumpKey")) {
            var inputText = prompt("Menu:\n1 - Regenerate maze");
            if (inputText == "1") {
                this.delegate.playerControlsDidRequestRegenerateMaze(this);
            }
        }
	}
   };
	return playerControls;
}
