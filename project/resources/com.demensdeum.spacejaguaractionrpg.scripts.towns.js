function addTownsToScene() {
    for (var i = 0; i < 4; i++) {
        var townName = "town" + i;
        var town = new Object();
        town.modelPath = "com.demensdeum.spacejaguaractionrpg.town.fsglmodel";
        var randomPosition = new Object();
        randomPosition.x = Math.randInt(0, kMapWidth);
        randomPosition.y = 0;
        randomPosition.z = Math.randInt(0, kMapHeight);
        town.position = randomPosition;
        addObject(town);
    }
}
