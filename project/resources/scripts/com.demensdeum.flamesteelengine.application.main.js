function includeDependencies() {
    include("com.demensdeum.flamesteelengine.utils.js");
    include("com.demensdeum.spacejaguaractionrpg.enginelogocontroller.js");
    include("com.demensdeum.spacejaguaractionrpg.companylogocontroller.js");
    include("com.demensdeum.spacejaguaractionrpg.menucontroller.js");
    include("com.demensdeum.spacejaguaractionrpg.newGameController.js");
    include("com.demensdeum.spacejaguaractionrpg.object.state.js");
    include("com.demensdeum.spacejaguaractionrpg.objectAbilitiesFactory.js");
    include("com.demensdeum.spacejaguaractionrpg.objectsFactory.js");
    include("com.demensdeum.spacejaguaractionrpg.namesFactory.js");
}

function CreateContext() {
    var context = {    
        initializeIfNeeded : function () {
            if (this.initialized === undefined) {
                print("context initialize");
                includeDependencies();

                var kGameTitle = "Space Jaguar v0.0.2";
                setWindowTitle(kGameTitle);
                
                this.companyLogoController = CreateCompanyLogoController();
                this.engineLogoController = CreateEngineLogoController();
                this.menuController = CreateMenuController(this);
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
                this.setCurrentController(this.newGameController);
            }
            
        },
        menuControllerDidRequestNewGame : function(controller) {
            this.setCurrentController(this.newGameController);
        }
    };
    return context;
}

if (GLOBAL_CONTEXT === undefined) {
    includeDependencies();
    GLOBAL_CONTEXT = CreateContext();
}
GLOBAL_CONTEXT.step();
