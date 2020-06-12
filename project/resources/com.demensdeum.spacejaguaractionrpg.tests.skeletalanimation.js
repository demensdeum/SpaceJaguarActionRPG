if (initialized != true) {
    print("com.demensdeum.spacejaguaractionrpg.tests.skeletalanimation.js loaded");
    initialized = true;
    
    var jaguar = createObject();
    jaguar.name = "Jaguar";
    jaguar.modelPath = "chibihero.fsglmodel";
    
    var position = new Object();
    position.x = 8;
    position.y = -2;
    position.z = 0;
   
    jaguar.position = position;
    
    addObject(jaguar);

    jaguar.playAnimation("Walk");
}
