function createCommand() {
    var command = {
        timer : 0,
        name : "idle"
    };
    
    return command;
}

function createEnemyWithName(name) {
 
    var enemy = {
        step : function() {
            var moveSpeed = 0.008;
            var commands = ["idle", "goRight", "goLeft", "goUp", "goDown"];
            if (this.currentCommand.timer < 1) {
                this.currentCommand.timer = Math.randInt(10, 100);
                var newCommandRandom = Math.randInt(0, commands.length - 1);
                this.currentCommand.name = commands[newCommandRandom];
            }
            var commandName = this.currentCommand.name;
            if (commandName == "goRight") {
                this.position.x += moveSpeed;
            }
            else if (commandName == "goLeft") {
                this.position.x -= moveSpeed;
            }
            else if (commandName == "goDown") {
                this.position.z += moveSpeed;
            }
            else if (commandName == "goUp") {
                this.position.z -= moveSpeed;
            }
            this.currentCommand.timer -= 1;
        }
    };    
    enemy.currentCommand = createCommand();
    enemy.name = name;
        
    return enemy;
}

function addEnemiesToScene() {
    enemies = [];
    maxEnemiesCount = 100;
    maxMapWidth = 40;
    maxMapHeight = 40;

    for (var i = 0; i < maxEnemiesCount; i++) {
        print("add enemy to scene at index: " + i);
        var enemyName = "enemy" + i;
        var enemy = createEnemyWithName(enemyName);        
        enemy.modelPath = "com.demensdeum.deathmaskgame.combatdrone.fsglmodel";
        var randomPosition = new Object();
        randomPosition.x = Math.randInt(0, maxMapWidth);
        randomPosition.y = 0;
        randomPosition.z = Math.randInt(0, maxMapHeight);
        enemy.position = randomPosition;
        addObject(enemy);
        enemies[i] = enemy;
    }
}

function enemiesControllerStep() {
    for (var i = 0; i < maxEnemiesCount; i++) {
        var enemy = enemies[i];
        enemy.step();
        updateObject(enemy);
    }
}
