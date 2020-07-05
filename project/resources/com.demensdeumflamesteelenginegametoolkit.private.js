function newObjectWithIdAndPositionXYZrXrYrZ__private(id, x, y, z, rX, rY, rZ) {
    
    var position = new Object();
    position.x = x;
    position.y = y;
    position.z = z;
    
    var rotation = new Object();
    rotation.x = rX;
    rotation.y = rY;
    rotation.z = rZ;
    
    var object = new Object();
    object.name = id;
    object.position = position;
    object.rotation = rotation;
    
    print("newObjectWithIdAndPosition__private: " + object.name);
    
    return object;
};
