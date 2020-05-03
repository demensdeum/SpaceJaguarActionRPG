function newObjectWithIdAndPositionXYZ__private(id, x, y, z) {
    
    var position = new Object();
    position.x = x;
    position.y = y;
    position.z = z;
    
    var object = new Object();
    object.name = id;
    object.position = position;
    
    print("newObjectWithIdAndPosition__private");
    
    return object;
};
