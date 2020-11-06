function CreatePlayerControls(outputTargetName, outputDelegate, outputGameData) {
    var playerControls = {

      isEnabled: true,
    delegate: outputDelegate,
    targetName : outputTargetName,
    gameData : outputGameData,

	step : function() {
    if (this.isEnabled == false) {
      return;
    }
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
            var inputText = prompt("\
            1. Freefly\
            2. Interact
            ");
            if (inputText == "1") {
              this.delegate.playerControlsDidRequestFreeFlyMode(this);
            }
            else if (inputText == "2") {
              this.delegate.playerControlsDidRequestInteraction(this);
            }
        }
	}
   };
	return playerControls;
}
