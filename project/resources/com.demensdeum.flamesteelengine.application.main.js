kGameTitle = "Space Jaguar v0.0.1";

function includeDependencies() {
    include("com.demensdeum.flamesteelengine.utils.js");
}

function initializeIfNeeded() {
    if (initialized === undefined) {
      initialized = true;
        print("initialize");
    }
    else {
        return;
    }

      setWindowTitle(kGameTitle); 
        includeDependencies();
        addDefaultCamera();

        var cube = createObject();
        cube.name = "Cube";
        cube.modelPath = "com.flamesteelengine.plane.fsglmodel";

        var position = createObject();
        position.x = 0;
        position.y = 0;
        position.z = 0;

        cube.position = position;
        addObject(cube);

        GRANNYPILLS();
}

initializeIfNeeded();
