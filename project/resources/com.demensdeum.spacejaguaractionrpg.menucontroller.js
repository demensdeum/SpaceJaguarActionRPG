function CreateMenuController() {
    var controller = {
        initializeIfNeeded : function() {
            if (this.initialized === undefined) {               
                this.initialized = true;

                this.timer = 0;
                addDefaultCameraAtXYZAndRotationXYZ(1.7762, 0.03278, 0, 90, 0, 0);

                var stars = createObject();
                stars.name = "Stars";
                stars.modelPath = "com.demensdeum.spacejaguaractionrpg.stars.fsglmodel";
                var starsPosition = new Object();
                starsPosition.x = 0;
                starsPosition.y = 0;
                starsPosition.z = 0;
                stars.position = starsPosition;
                
                var planet = createObject();
                planet.name = "Planet";
                planet.modelPath = "com.flamesteelengine.sphere.fsglmodel";
                var planetPosition = new Object();
                planetPosition.x = 0;
                planetPosition.y = 0;
                planetPosition.z = 0;
                planet.position = planetPosition;
                var scale = new Object();
                scale.x = 0.5;
                scale.y = 0.5;
                scale.z = 0.5;
                planet.scale = scale;
                
                addObject(stars);
                addObject(planet);
                
                var camera = getObject("camera");
                camera.position.x = 1.4762;
                camera.position.y = 0.03278;
                camera.position.z = 0.5;
                
                camera.rotation.x = -270;
                camera.rotation.y = 0;
                camera.rotation.z = 0;
                
                updateObject(camera);
                
                //GRANNYPILLS();
            }
        },
        step : function() {
            this.initializeIfNeeded();
            if (isKeyPressed("jumpKey")) {
                //this.delegate.controllerDidFinish(this);
            }
            var planet = getObject("Planet");
            planet.rotation.x += 0.001;
            planet.rotation.y += 0.001;
            updateObject(planet);
        }
    };
    return controller;
}
