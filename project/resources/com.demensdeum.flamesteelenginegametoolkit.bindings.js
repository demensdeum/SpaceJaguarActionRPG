BINDINGS_DEBUG = true;

function createObject() {
    var object = {
        playAnimation : function(animationName) {
            playAnimation__private(this.name, animationName);
        }
    };
    
    var position = new Object();
    position.x = 0;
    position.y = 0;
    position.z = 0;
    
    var rotation = new Object();
    rotation.x = 0;
    rotation.y = 0;
    rotation.z = 0;
    
    var scale = new Object();
    scale.x = 1;
    scale.y = 1;
    scale.z = 1;
    
    object.position = position;
    object.rotation = rotation;
    object.scale = scale;
    
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
    
    var sX = object.scale.x;
    var sY = object.scale.y;
    var sZ = object.scale.z;
        
    addObject__private(object.name, object.modelPath, x, y, z, rX, rY, rZ, sX, sY, sZ);
}

function updateObject(object) {
    var x = object.position.x;
    var y = object.position.y;
    var z = object.position.z;
    
    var rX = object.rotation.x;
    var rY = object.rotation.y;
    var rZ = object.rotation.z;
    
    if (BINDINGS_DEBUG) {
        print("!!!update object: " + object.name + " x: " + x + " y: " + y + " z: " + z + " rX: " + rX + " rY: " + rY + " rZ: " + rZ);    
    }

    updateObject__private(object.name, x, y, z, rX, rY, rZ);
};

function removeAllObjects() {
    removeAllObjects__private();
}
