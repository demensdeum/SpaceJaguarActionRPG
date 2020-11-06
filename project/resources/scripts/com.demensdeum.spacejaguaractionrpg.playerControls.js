function CreatePlayerControls(outputTargetName, outputDelegate, outputGameData) {
    var playerControls = {

    delegate: outputDelegate,
    targetName : outputTargetName,
    gameData : outputGameData,

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
            print("Location: " + this.gameData.location.name);
            print("Jag");
            print("Health: " + this.gameData.jag.health.points + "/" + this.gameData.jag.maxHealth.points);
            print("Blade:  " + this.gameData.jag.bladeFightMin.points + "-" + this.gameData.jag.bladeFightMax.points);
            var inputText = prompt(">");
            if (inputText == "1") {
                
            }
        }
	}
   };
	return playerControls;
}
