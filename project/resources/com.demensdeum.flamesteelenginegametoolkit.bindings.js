BINDINGS_DEBUG = false;

function createObject() {
    var object = {
        playAnimation : function(animationName) {
            playAnimation__private(this.name, animationName);
        }
    };
    
    return object;
}

function getObject(name) {
    getObject__private(name);
    return getObject__private__CallResult;
};

function addObject(object) {
    var x = object.position.x;
    var y = object.position.y;
    var z = object.position.z;
    
    var rX = object.rotation.x;
    var rY = object.rotation.y;
    var rZ = object.rotation.z;
        
    addObject__private(object.name, object.modelPath, x, y, z, rX, rY, rZ);
}

function updateObject(object) {
    var x = object.position.x;
    var y = object.position.y;
    var z = object.position.z;
    
    var rX = object.rotation.x;
    var rY = object.rotation.y;
    var rZ = object.rotation.z;
    
    if (BINDINGS_DEBUG) {
        print("update object: " + object.name + "x: " + x + " y: " + y + " z: " + z + " rX: " + rX + " rY: " + rY + " rZ: " + rZ);    
    }

    updateObject__private(object.name, x, y, z, rX, rY, rZ);
};

function removeAllObjects() {
    removeAllObjects__private();
}
