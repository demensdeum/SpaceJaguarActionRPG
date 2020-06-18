kGameTitle = "Space Jaguar v0.0.1";

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
                this.currentController = CreateEngineLogoController();
                this.initialized = true;
            }
        },
        step : function() {
            this.initializeIfNeeded();
            this.currentController.step();
        }
    };
    return context;
}

if (GLOBAL_CONTEXT === undefined) {
    includeDependencies();
    GLOBAL_CONTEXT = createContext();
}
GLOBAL_CONTEXT.step();
