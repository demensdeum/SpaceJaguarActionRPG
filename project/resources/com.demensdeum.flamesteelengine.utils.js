function addDefaultCameraAtXYZAndRotationXYZ(x, y, z, rX, rY, rZ) {
    var camera = createObject();
    camera.name = "camera";
    
    var position = new Object();
    position.x = x;
    position.y = y;
    position.z = z;
    
    var rotation = new Object();
    rotation.x = rX;
    rotation.y = rY;
    rotation.z = rZ;
   
    camera.position = position;
    camera.rotation = rotation;
    
    addObject(camera);    
}

function addDefaultCamera() {
    addDefaultCameraAtXYZ(0,0,0);
}
