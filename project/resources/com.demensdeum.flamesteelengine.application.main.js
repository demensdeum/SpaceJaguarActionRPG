function includeDependencies() {
    include("com.demensdeum.flamesteelengine.utils.js");
    include("com.demensdeum.spacejaguaractionrpg.enginelogocontroller.js");
    include("com.demensdeum.spacejaguaractionrpg.companylogocontroller.js");
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
                
                this.setCurrentController(this.companyLogoController);
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
            
        }
    };
    return context;
}

if (GLOBAL_CONTEXT === undefined) {
    includeDependencies();
    GLOBAL_CONTEXT = createContext();
}
GLOBAL_CONTEXT.step();
