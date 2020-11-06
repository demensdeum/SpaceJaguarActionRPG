function MazeRepresenter() {
    this.representMaze = function(generatedMaze) {
        var enemyCount = 0;
        for (var x = 0; x < generatedMaze.width; x++) {
            for (var y = 0; y < generatedMaze.height; y++) {
                var cell = generatedMaze.maze[x + "_" + y];
                if (cell == "#") {
                    var cube = createObject();
                    cube.name = "Mountain";
                    cube.modelPath = "com.demensdeum.spacejaguaractionrpg.mountain.fsglmodel";

                    var position = new Object();
                    position.x = x;
                    position.y = 0;
                    position.z = y;

                    cube.position = position;
                    addObject(cube);
                }
                else if (cell == "S") {
                    var jag = createObject();
                    jag.name = "Jag";
                    jag.modelPath = "com.demensdeum.spacejaguaractionrpg.jag.fsglmodel";

                    var position = new Object();
                    position.x = x;
                    position.y = 0;
                    position.z = y;

                    jag.position = position;
                    addObject(jag);
                }
                else if (cell == "C") {
                    var cube = createObject();
                    cube.name = "Chest";
                    cube.modelPath = "com.demensdeum.spacejaguaractionrpg.chest.fsglmodel";

                    var position = new Object();
                    position.x = x;
                    position.y = 0;
                    position.z = y;

                    cube.position = position;
                    addObject(cube);
                }
                else if (cell == "M") {
                    var cube = createObject();
                    cube.name = "Chest";
                    cube.modelPath = "com.demensdeum.spacejaguaractionrpg.maze.fsglmodel";

                    var position = new Object();
                    position.x = x;
                    position.y = 0;
                    position.z = y;

                    cube.position = position;
                    addObject(cube);
                }
                else if (cell == "E") {
                    var cube = createObject();
                    cube.name = "Enemy" + enemyCount;
                    cube.modelPath = "com.demensdeum.spacejaguaractionrpg.enemy.fsglmodel";

                    var position = new Object();
                    position.x = x;
                    position.y = 0;
                    position.z = y;

                    cube.position = position;
                    addObject(cube);

                    enemyCount += 1;
                }
                else if (cell == "X") {
                  var cube = createObject();
                  cube.name = "Exit Point";
                  cube.modelPath = "com.demensdeum.spacejaguaractionrpg.exitPoint.fsglmodel";

                  var position = new Object();
                  position.x = x;
                  position.y = 0;
                  position.z = y;

                  cube.position = position;
                  addObject(cube);
                }
                else if (cell == "T") {
                    var cube = createObject();
                    cube.name = "Chest";
                    cube.modelPath = "com.demensdeum.spacejaguaractionrpg.town.fsglmodel";

                    var position = new Object();
                    position.x = x;
                    position.y = 0;
                    position.z = y;

                    cube.position = position;
                    addObject(cube);
                }
            }
        }
    };
};
