function CreateEnemiesGenerator() {
    var enemiesGenerator = {
        generateEnemies : function() {
            var enemies = [];
            var enemiesLimit = 40;
            for (var i = 0; i < enemiesLimit; i++) {
                var enemy = createObject();
                enemy.name = "enemy" + i;
                enemy.modelPath = "com.demensdeum.deathmaskgame.combatdrone.fsglmodel";
                enemy.position.x = Math.randInt(20, 90);
                enemy.position.y = -2;
                enemy.position.z = Math.randInt(20, 90);
                addObject(enemy);
                enemies[i] = enemy;
            };
            return enemies;
        }
    };
    return enemiesGenerator;
};
