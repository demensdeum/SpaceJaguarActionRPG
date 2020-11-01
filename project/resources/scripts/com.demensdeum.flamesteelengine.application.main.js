function includeDependencies() {
    include("com.demensdeum.flamesteelengine.utils.js");
    include("com.demensdeum.spacejaguaractionrpg.enginelogocontroller.js");
    include("com.demensdeum.spacejaguaractionrpg.companylogocontroller.js");
    include("com.demensdeum.spacejaguaractionrpg.menucontroller.js");
    include("com.demensdeum.spacejaguaractionrpg.gameplaycontroller.js");
    include("com.demensdeum.spacejaguaractionrpg.newGameController.js");
}

function createContext() {
    var context = {    
        initializeIfNeeded : function () {
            if (this.initialized === undefined) {
                print("context initialize");
                includeDependencies();

                var kGameTitle = "Space Jaguar v0.0.1";                
                setWindowTitle(kGameTitle); 
                
                this.companyLogoController = CreateCompanyLogoController();
                this.engineLogoController = CreateEngineLogoController();
                this.menuController = CreateMenuController();
                this.gameplayController = CreateGameplayController();
                this.newGameController = CreateNewGameController();
                
                this.setCurrentController(this.newGameController);
                this.initialized = true;
            }
        },
        setCurrentController : function(currentController) {
                this.currentController = currentController;
                this.currentController.delegate = this;            
        },
        step : function() {
            this.initializeIfNeeded();
            this.currentController.step();
        },
        controllerDidFinish : function(controller) {
            removeAllObjects();
            if (controller == this.companyLogoController) {
                this.setCurrentController(this.engineLogoController);
            }
            else if (controller == this.engineLogoController) {
                this.setCurrentController(this.menuController);
            }
            else if (controller == this.menuController) {
                this.setCurrentController(this.gameplayController);
            }
            
        }
    };
    return context;
}

if (GLOBAL_CONTEXT === undefined) {
    includeDependencies();
    GLOBAL_CONTEXT = createContext();
}
GLOBAL_CONTEXT.step();
