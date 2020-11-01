function CreateNewGameController() {

    var controller = {
        initializeIfNeeded : function() {
            if (this.initialized === undefined) {
                addDefaultCameraAtXYZAndRotationXYZ(1, 0.03278, 0, 90, 0, 0);
                
                var mazeGeneratorParams = new Object();
                mazeGeneratorParams.mapWidth  = 100; 
                mazeGeneratorParams.mapHeight = 100; 
                mazeGeneratorParams.maxLines = Math.randInt(60, 100);
                mazeGeneratorParams.lineLength = Math.randInt(2, 8);
                mazeGeneratorParams.numberOfRuns = Math.randInt(5, 10);
                mazeGeneratorParams.cursorSizeWidth = 3;
                mazeGeneratorParams.cursorSizeHeight = 3;
                
                var maze = CreateMazeGenerator().generateMaze(mazeGeneratorParams);
                this.initialized = true;
            }
        },
        step : function() {
            this.initializeIfNeeded();
            print("Create new game controller!");
        }
    };
    
    return controller;
    
};
