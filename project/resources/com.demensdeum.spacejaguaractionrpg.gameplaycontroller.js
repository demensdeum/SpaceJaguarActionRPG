include("com.demensdeum.spacejaguaractionrpg.mazegenerator.js");

function CreateGameplayController() {
    var controller = {
        initializeIfNeeded : function() {
            if (this.initialized === undefined) {               
                this.initialized = true;
                this.cameraLockupEnabled = false;

                addDefaultCameraAtXYZAndRotationXYZ(1, 0.03278, 0, 90, 0, 0);

                this.hero = createObject();
                this.hero.name = "Hero";
                this.hero.modelPath = "chibihero.fsglmodel";

                var position = new Object();
                position.x = 0;
                position.y = 0;
                position.z = 0;

                this.hero.position = position;
                addObject(this.hero);
                
                this.camera = getObject("camera");
                
                this.generateMaze();                
            }
        },
        lockCameraIfNeeded : function() {
            if (this.cameraLockupEnabled != true) {
                GRANNYPILLS();
                return;
            }
            this.camera.position.x = this.hero.position.x - 5.8;
            this.camera.position.y = this.hero.position.y + 15;
            this.camera.position.z = this.hero.position.z + 9.5;
            
            this.camera.rotation.x = this.hero.rotation.x - 32;
            this.camera.rotation.y = this.hero.rotation.y + 55;
            this.camera.rotation.z = 0;
            
            updateObject(this.camera);            
        },
        step : function() {
            this.initializeIfNeeded();
            this.lockCameraIfNeeded();
            print("Game Controller step");
        },
        generateMaze : function() {
            var mazeGenerator = CreateMazeGenerator();
            mazeGenerator.generateMaze();
        }
    };
    return controller;
}
