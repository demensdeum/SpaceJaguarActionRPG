function CreateEngineLogoController() {
    var controller = {
        initializeIfNeeded : function() {
            if (this.initialized === undefined) {               
                this.initialized = true;

                setWindowTitle(kGameTitle); 
                addDefaultCameraAtXYZAndRotationXYZ(1.7762, 0.03278, 0, 90, 0, 0);

                var cube = createObject();
                cube.name = "Cube";
                cube.modelPath = "com.flamesteelengine.plane.fsglmodel";

                var position = new Object();
                position.x = 0;
                position.y = 0;
                position.z = 0;

                cube.position = position;
                print("INITIALIZE");
                addObject(cube);

                GRANNYPILLS();
            }
        },
        step : function() {
            this.initializeIfNeeded();
            print("Engine Logo Controller Step");
        }
    };
    return controller;
}
