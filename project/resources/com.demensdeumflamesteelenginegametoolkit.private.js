function newObjectWithIdAndPositionXYZrXrYrZsXsYsZ__private(id, x, y, z, rX, rY, rZ, sX, sY, sZ) {
    
    var position = new Object();
    position.x = x;
    position.y = y;
    position.z = z;
    
    var rotation = new Object();
    rotation.x = rX;
    rotation.y = rY;
    rotation.z = rZ;
    
    var scale = new Object();
    scale.x = sX;
    scale.y = sY;
    scale.z = sZ;
    
    var object = new Object();
    object.name = id;
    object.position = position;
    object.rotation = rotation;
    object.scale = scale;
    
    print("newObjectWithIdAndPosition__private: " + object.name);
    
    return object;
};
