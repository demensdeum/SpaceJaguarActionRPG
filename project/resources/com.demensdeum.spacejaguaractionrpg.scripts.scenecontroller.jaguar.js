function addJaguarToScene() {
    var jaguar = new Object();
    jaguar.name = "Jaguar";
    jaguar.modelPath = "com.demensdeum.deathmaskgame.combatdrone.fsglmodel";
    
    var position = new Object();
    position.x = 10;
    position.y = 0;
    position.z = 10;
    
    jaguar.position = position;
    
    addObject(jaguar);
}

function jaguarControllerStep() {
    
    var moveSpeed = 0.1;

    if (isKeyPressed("leftKey")) {
        print("left key pressed");
        var jaguar = getObject("Jaguar");
        jaguar.position.x -= moveSpeed;
        updateObject(jaguar);
    }
    if (isKeyPressed("rightKey")) {
        print("right key pressed");
        var jaguar = getObject("Jaguar");
        jaguar.position.x += moveSpeed;
        updateObject(jaguar);
    }
    if (isKeyPressed("upKey")) {
        print("up key pressed");
        var jaguar = getObject("Jaguar");
        jaguar.position.z -= moveSpeed;
        updateObject(jaguar);
    }
    if (isKeyPressed("downKey")) {
        print("down key pressed");
        var jaguar = getObject("Jaguar");
        jaguar.position.z += moveSpeed;
        updateObject(jaguar);
    }
    
}
