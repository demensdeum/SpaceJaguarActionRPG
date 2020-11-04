include("com.demensdeum.spacejaguaractionrpg.mazegenerator.js");
include("com.demensdeum.spacejaguaractionrpg.playerControls.js");
include("com.demensdeum.spacejaguaractionrpg.cameraControls.js");

function CreateNewGameController() {

    var controller = {
        initializeIfNeeded : function() {
            if (this.initialized === undefined) {
                addDefaultCameraAtXYZAndRotationXYZ(1, 0.03278, 0, 90, 0, 0);
                
                var mazeGeneratorParams = new Object();
                mazeGeneratorParams.mapWidth  = 60; 
                mazeGeneratorParams.mapHeight = 60; 
                mazeGeneratorParams.maxLines = Math.randInt(60, 100);
                mazeGeneratorParams.lineLength = Math.randInt(2, 8);
                mazeGeneratorParams.numberOfRuns = Math.randInt(5, 10);
                mazeGeneratorParams.cursorSizeWidth = 3;
                mazeGeneratorParams.cursorSizeHeight = 3;
		   mazeGeneratorParams.enemyChance = 40;
		   mazeGeneratorParams.chestChance = 20;
		   mazeGeneratorParams.mazeChance = 300;
		   mazeGeneratorParams.townChance = 300;
                
                var generatedMaze = CreateMazeGenerator().generateMaze(mazeGeneratorParams);
			this.representMaze(generatedMaze);
            
                this.playerControls = CreatePlayerControls("Jag");
                this.cameraControls = CreateCameraControls("Jag");
            
                this.initialized = true;
            }
        },
	representMaze : function(generatedMaze) {
		var mountainCount = 0;

		var MAP_REPRESENT_DEBUG_MODE = false;

		if (MAP_REPRESENT_DEBUG_MODE == true) {
		print(generatedMaze.width);
		print(generatedMaze.width);
            print("Printed generated map");
            for (var y = 0; y < generatedMaze.height; y++) {
                var line = "";
                for (var x = 0; x < generatedMaze.width; x++) {
                    var name = x + "_" + y;
                    line += generatedMaze.maze[name];
                }
                print(line);
            }
            exit(1);
		}

		for (var x = 0; x < generatedMaze.width; x++) {
			for (var y = 0; y < generatedMaze.height; y++) {
				var cell = generatedMaze.maze[x + "_" + y];
				if (cell == "#") {
		                var cube = createObject();
             			   cube.name = "Mountain" + mountainCount;
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
             			   cube.name = "Enemy";
		                cube.modelPath = "com.demensdeum.spacejaguaractionrpg.enemy.fsglmodel";

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
	},
        step : function() {
            this.initializeIfNeeded();
            this.playerControls.step();
            this.cameraControls.step();
            print("Create new game controller!");
        }
    };
    
    return controller;
    
};
