function CreateNewGameController() {

    var controller = {
        initializeIfNeeded : function() {
            if (this.initialized === undefined) {
                addDefaultCameraAtXYZAndRotationXYZ(1, 0.03278, 0, 90, 0, 0);
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
