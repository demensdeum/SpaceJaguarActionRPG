function CreateMenuController(outputDelegate) {
    var controller = {
        delegate : outputDelegate,
        initializeIfNeeded : function() {
            if (this.initialized != true) {
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

                var logo = createObject();
                logo.name = "Logo";
                logo.modelPath = "com.demensdeum.spacejaguaractionrpg.logo.fsglmodel";
                logo.position.x = 0.8;
                logo.position.z = 0.48;
                logo.position.y = 0.26;
                logo.scale.y = 0.14;
                logo.scale.z = 0.6;

                var planet = createObject();
                planet.name = "Planet";
                planet.modelPath = "com.demensdeum.flamesteelengine.sphere.fsglmodel";
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

                addObject(logo);
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
            var planet = getObject("Planet");
            planet.rotation.x += 0.001;
            planet.rotation.y += 0.001;
            updateObject(planet);
            if (isKeyPressed("jumpKey")) {
                var inputText = prompt("\
                1. New Game\
                2. Load Game\
                3. Settings\
                4. Credits\
                5. Exit
                ");
                if (inputText == "1") {
                    this.initialized = false;
                    removeAllObjects();
                    this.delegate.menuControllerDidRequestNewGame(this);
                }
                else if (inputText == "4") {
                    prompt("See Credits.txt");
                }
                else if (inputText == "5") {
                  exit(0);
                }
            }
        }
    };
    return controller;
}
