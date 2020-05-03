function addEnemiesToScene() {
    enemies = [];
    maxEnemiesCount = 10;

    var jaguar = getObject("Jaguar");
    jaguarPosition = jaguar.position;
    print("x: " + jaguarPosition.x);
    print("y: " + jaguarPosition.y);
    print("z: " + jaguarPosition.z);
    
    for (var i = 0; i < maxEnemiesCount; i++) {
        print("add enemy to scene at index: " + i);
        var enemy = new Object();
        enemy.name = "enemy" + i;
        enemy.modelPath = "com.demensdeum.deathmaskgame.combatdrone.fsglmodel";
        enemy.position = jaguarPosition;
        addObject(enemy);
        enemies[i] = enemy;
    }
}

function initializeIfNeeded() {
    if (initialized === undefined) {
        print("initialize");
    }
    else {
        return;
    }

    initialized = true;
    addEnemiesToScene();
};

function step() {
	initializeIfNeeded();
    for (var i = 0; i < maxEnemiesCount; i++) {
        var enemy = enemies[i];
        enemy.position.x += 0.01;
        updateObject(enemy);
    }
};

step();
