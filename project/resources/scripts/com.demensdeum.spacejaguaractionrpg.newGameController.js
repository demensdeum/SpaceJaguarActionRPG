include("com.demensdeum.spacejaguaractionrpg.mazeGenerator.js");
include("com.demensdeum.spacejaguaractionrpg.playerControls.js");
include("com.demensdeum.spacejaguaractionrpg.cameraControls.js");

function CreateNewGameController() {

    var controller = {
        initializeIfNeeded : function() {
            if (this.initialized === undefined) {            
                this.initialized = true;
                this.cleanAndGenerateAndRepresentMaze();
            }
        },
        cleanAndGenerateAndRepresentMaze : function() {
            CreateMazeGenerator().cleanAndGenerateAndRepresentMaze();
            this.playerControls = CreatePlayerControls("Jag", this);
            this.cameraControls = CreateCameraControls("Jag");               
        },
        step : function() {
            this.initializeIfNeeded();
            this.playerControls.step();
            this.cameraControls.step();
        },
        playerControlsDidRequestRegenerateMaze : function(playerControls) {
            this.cleanAndGenerateAndRepresentMaze();
        }
    };
    
    return controller;
    
};
