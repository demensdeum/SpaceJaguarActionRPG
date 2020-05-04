function includeDependencies() {
    include("com.demensdeum.spacejaguaractionrpg.scripts.scenecontroller.enemies.js");
    include("com.demensdeum.spacejaguaractionrpg.scripts.scenecontroller.jaguar.js");    
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
    addEnemiesToScene();
};

function step() {
	initializeIfNeeded();
    enemiesControllerStep();
    jaguarControllerStep();
};

step();
