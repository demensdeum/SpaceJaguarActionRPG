function CreateNewGameController() {

    var controller = {
        initializeIfNeeded : function() {
            if (this.initialized === undefined) {
                addDefaultCameraAtXYZAndRotationXYZ(1, 0.03278, 0, 90, 0, 0);
                
                var mazeGeneratorParams = new Object();
                mazeGeneratorParams.mapWidth  = 80; 
                mazeGeneratorParams.mapHeight = 80; 
                mazeGeneratorParams.maxLines = Math.randInt(60, 100);
                mazeGeneratorParams.lineLength = Math.randInt(2, 8);
                mazeGeneratorParams.numberOfRuns = Math.randInt(5, 10);
                mazeGeneratorParams.cursorSizeWidth = 3;
                mazeGeneratorParams.cursorSizeHeight = 3;
                
                var generatedMaze = CreateMazeGenerator().generateMaze(mazeGeneratorParams);
			this.representMaze(generatedMaze);
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
				if (generatedMaze.maze[x + "_" + y] == "#") {
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
			}
		}


			GRANNYPILLS();		
	},
        step : function() {
            this.initializeIfNeeded();
            print("Create new game controller!");
        }
    };
    
    return controller;
    
};
