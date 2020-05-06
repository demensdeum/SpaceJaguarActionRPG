function includeDependencies() {
    include("com.demensdeum.spacejaguaractionrpg.scripts.sceneController.constants.js");
    include("com.demensdeum.spacejaguaractionrpg.scripts.wallsgenerator.js");
    include("com.demensdeum.spacejaguaractionrpg.scripts.scenecontroller.enemies.js");
    include("com.demensdeum.spacejaguaractionrpg.scripts.scenecontroller.jaguar.js");
    include("com.demensdeum.spacejaguaractionrpg.scripts.towns.js");
}

function initializeIfNeeded() {
    if (initialized === undefined) {
        print("initialize");
    }
    else {
        return;
    }
    
    initialized = true;
    includeDependencies();
    addJaguarToScene();
    addEnemiesToScene();
    addWallsToScene();
    addTownsToScene();
};

function step() {
	initializeIfNeeded();
    enemiesControllerStep();
    jaguarControllerStep();
};

step();
GRANNYPILLS();
