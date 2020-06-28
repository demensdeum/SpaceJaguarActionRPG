include("com.demensdeum.spacejaguaractionrpg.mazegenerator.js");
include("com.demensdeum.spacejaguaractionrpg.enemiesgenerator.js");
include("com.demensdeum.spacejaguaractionrpg.gameplayuicontroller.js");

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
                
                this.hero.abilities = [];
                
                var bladeFightingAbility = new Object();
                bladeFightingAbility.name = "BLADFG";
                bladeFightingAbility.description = "Blade fighting ability";
                bladeFightingAbility.points = 3;
                
                var shadyDealsAbility = new Object();
                shadyDealsAbility.name = "SHADYD";
                shadyDealsAbility.description = "Shady deals - ability to make not very law abiding deals";
                shadyDealsAbility.points = 4;
                
                var theftTraitsAbility = new Object();
                theftTraitsAbility.name = "THEFTT";
                theftTraitsAbility.description = "Theft traits ability - lockpicking, pocketpicking etc.";
                theftTraitsAbility.points = 3;
                
                var healthAbility = new Object();
                healthAbility.name = "HEALTH";
                healthAbility.description = "Health ability, on zero you are dead or become zombie/ghost?";
                healthAbility.points = 10;
                
                pushBackValueToArray(bladeFightingAbility, this.hero.abilities);
                pushBackValueToArray(shadyDealsAbility, this.hero.abilities);
                pushBackValueToArray(theftTraitsAbility, this.hero.abilities);
                pushBackValueToArray(healthAbility, this.hero.abilities);
                
                addObject(this.hero);
                
                this.camera = getObject("camera");
                
                this.generateMaze();  
                
                this.gameplayuicontroller = createGameplayUIController();
                this.gameplayuicontroller.initializeIfNeeded();
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
            this.gameplayuicontroller.step();
            print("Game Controller step");
        },
        generateMaze : function() {
            var mazeGenerator = CreateMazeGenerator();
            mazeGenerator.generateMaze();
            var enemiesGenerator = CreateEnemiesGenerator();
            enemiesGenerator.generateEnemies();
        }
    };
    return controller;
}
