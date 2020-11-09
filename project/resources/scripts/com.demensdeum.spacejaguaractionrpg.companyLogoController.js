function CreateCompanyLogoController() {
    var controller = {
        initializeIfNeeded : function() {
            if (this.initialized != true) {
                this.initialized = true;

                this.timer = 0;
                addDefaultCameraAtXYZAndRotationXYZ(1, 0.03278, 0, 90, 0, 0);

                var cube = createObject();
                cube.name = "Cube";
                cube.modelPath = "com.demensdeum.companylogo.plane.fsglmodel";

                var position = new Object();
                position.x = 0;
                position.y = 0;
                position.z = 0;

                cube.position = position;
                addObject(cube);
            }
        },
        step : function() {
            this.initializeIfNeeded();
            this.timer += 1;
            if (this.timer > 100) {
                this.timer = 0;
                this.initialized = false;
                removeAllObjects();
                this.delegate.controllerDidFinish(this);
            }
            print(this.timer);
            print("Engine Logo Controller Step");
        }
    };
    return controller;
}
