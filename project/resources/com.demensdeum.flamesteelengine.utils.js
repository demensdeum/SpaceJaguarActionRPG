function addDefaultCamera() {
    var camera = createObject();
    camera.name = "camera";
    
    var position = new Object();
    position.x = 0;
    position.y = 0;
    position.z = 0;
   
    camera.position = position;
    
    addObject(camera);    
}
