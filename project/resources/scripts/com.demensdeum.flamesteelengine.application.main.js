function CreateContext() {
    var context = {
        initializeIfNeeded : function () {
            if (this.initialized === undefined) {
                print("Context initialized");

                var kGameTitle = "Space Jaguar v0.0.2";
                setWindowTitle(kGameTitle);

                this.companyLogoController = CreateCompanyLogoController();
                this.engineLogoController = CreateEngineLogoController();
                this.menuController = CreateMenuController(this);
                this.newGameController = new NewGameController();

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
    include("com.demensdeum.spacejaguaractionrpg.includes.js");
    IncludeDependencies();
    GLOBAL_CONTEXT = CreateContext();
}
GLOBAL_CONTEXT.step();
