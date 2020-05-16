if (initialized != true) {
    print("com.demensdeum.spacejaguaractionrpg.tests.skeletalanimation.js loaded");
    initialized = true;
    
    var jaguar = createObject();
    jaguar.name = "Jaguar";
    jaguar.modelPath = "chibihero.fsglmodel";
    
    var position = new Object();
    position.x = 10;
    position.y = 0;
    position.z = 10;
   
    jaguar.position = position;
    
    addObject(jaguar);

    jaguar.playAnimation("walk");
}
