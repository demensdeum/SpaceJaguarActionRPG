function printVector(vector) {
    print("Vector: x: " + vector.x + " y: " + vector.y + " z: " + vector.z);
}

function printMatrix(matrix) {
    print("Print Matrix");
    var outputString = "\n";    
    for (var x = 0; x < matrix.length; x++) {
        var row = matrix[x];
        for (var y = 0; y < row.length; y++) {
            outputString = outputString + row[y] + ",";
        }
        outputString = outputString + "\n";
    }
    print(outputString);    
}

function copyVector(vector) {
    var outputVector = new Object();
    outputVector.x = vector.x;
    outputVector.y = vector.y;
    outputVector.z = vector.z;
    return outputVector;
}

function normalizeVector(vector) {
    var vectorCopy = vector;
    var w = Math.sqrt(vectorCopy.x * vectorCopy.x + vectorCopy.y * vectorCopy.y + vectorCopy.z * vectorCopy.z);
    vectorCopy.x = vectorCopy.x / w;
    vectorCopy.y = vectorCopy.y / w;
    vectorCopy.z = vectorCopy.z / w;
    return vectorCopy;
}

function crossVectors(lhsVector, rhsVector) {
    var outputVector = new Object();
    outputVector.x = lhsVector.y * rhsVector.z - lhsVector.z * rhsVector.y;
    outputVector.y = lhsVector.z * rhsVector.x - lhsVector.x * rhsVector.z;
    outputVector.z = lhsVector.x * rhsVector.y - lhsVector.y * rhsVector.x;
    return outputVector;
}

function dotVectors(l, r) {
    var o = l.x * r.x + l.y * r.y + l.z * r.z;
    return o;
}

function mat4MulMat4(l, r) {
        
    var m = [];
    m[0] = [0, 0, 0, 0];
    m[1] = [0, 0, 0, 0];
    m[2] = [0, 0, 0, 0];
    m[3] = [0, 0, 0, 0];

    m[0][0] = l[0][0] * r[0][0] + l[0][1] * r[1][0] + l[0][2] * r[2][0] + l[0][3] * r[3][0];
    m[0][1] = l[0][0] * r[0][1] + l[0][1] * r[1][1] + l[0][2] * r[2][1] + l[0][3] * r[3][1];
    m[0][2] = l[0][0] * r[0][2] + l[0][1] * r[1][2] + l[0][2] * r[2][2] + l[0][3] * r[3][2];
    m[0][3] = l[0][0] * r[0][3] + l[0][1] * r[1][3] + l[0][2] * r[2][3] + l[0][3] * r[3][3];
    
    m[1][0] = l[1][0] * r[0][0] + l[1][1] * r[1][0] + l[1][2] * r[2][0] + l[1][3] * r[3][0];
    m[1][1] = l[1][0] * r[0][1] + l[1][1] * r[1][1] + l[1][2] * r[2][1] + l[1][3] * r[3][1];
    m[1][2] = l[1][0] * r[0][2] + l[1][1] * r[1][2] + l[1][2] * r[2][2] + l[1][3] * r[3][2];
    m[1][3] = l[1][0] * r[0][3] + l[1][1] * r[1][3] + l[1][2] * r[2][3] + l[1][3] * r[3][3];

    m[2][0] = l[2][0] * r[0][0] + l[2][1] * r[1][0] + l[2][2] * r[2][0] + l[2][3] * r[3][0];
    m[2][1] = l[2][0] * r[0][1] + l[2][1] * r[1][1] + l[2][2] * r[2][1] + l[2][3] * r[3][1];
    m[2][2] = l[2][0] * r[0][2] + l[2][1] * r[1][2] + l[2][2] * r[2][2] + l[2][3] * r[3][2];
    m[2][3] = l[2][0] * r[0][3] + l[2][1] * r[1][3] + l[2][2] * r[2][3] + l[2][3] * r[3][3];
    
    m[3][0] = l[3][0] * r[0][0] + l[3][1] * r[1][0] + l[3][2] * r[2][0] + l[3][3] * r[3][0];
    m[3][1] = l[3][0] * r[0][1] + l[3][1] * r[1][1] + l[3][2] * r[2][1] + l[3][3] * r[3][1];
    m[3][2] = l[3][0] * r[0][2] + l[3][1] * r[1][2] + l[3][2] * r[2][2] + l[3][3] * r[3][2];
    m[3][3] = l[3][0] * r[0][3] + l[3][1] * r[1][3] + l[3][2] * r[2][3] + l[3][3] * r[3][3];
    
    return m;
}

function eulerRotationVectorFromMat4(m) {
    var r = new Object();
     r.z = Math.atan2(m[2][1], m[2][2]);
     r.y = Math.atan2(-m[2][0], Math.sqrt(m[2][1] * m[2][1] + m[2][2] * m[2][2]));
     r.x = Math.atan2(m[1][0], m[0][0]);
    
//     r.x = Math.asin(-m[2][1]);
//     if (Math.cos(r.x) > 0.0001)
//     {
//         r.y = Math.atan2(m[2][0], m[2][2]);
//         r.z = Math.atan2(m[0][1], m[1][1]);
//     }
//     else
//     {
//         r.y = 0.0;
//         r.z = Math.atan2(-m[1][0], m[0][0]);
//     }
    
    return r;
}

function toRadians(angle) {
    return angle * 0.0174;
}

function vec3minusVec3(l, r) {
    
    var o = new Object();
    o.x = l.x - r.x;
    o.y = l.y - r.y;
    o.z = l.z - r.z;
    
    return o;
}

function lookAt(eye, center, up) {
    
    var m = [];
    m[0] = [1, 0, 0, 0];
    m[1] = [0, 1, 0, 0];
    m[2] = [0, 0, 1, 0];
    m[3] = [0, 0, 0, 1];
    
 		var f = normalizeVector(vec3minusVec3(center, eye));
 		var s = normalizeVector(crossVectors(up, f));
 		var u = crossVectors(f, s);

		m[0][0] = s.x;
		m[1][0] = s.y;
		m[2][0] = s.z;
        
		m[0][1] = u.x;
		m[1][1] = u.y;
		m[2][1] = u.z;
        
 		m[0][2] = f.x;
 		m[1][2] = f.y;
 		m[2][2] = f.z;
        
		m[3][0] = -dotVectors(s, eye);
		m[3][1] = -dotVectors(u, eye);
		m[3][2] = -dotVectors(f, eye);    
    
    
    return m;
}

function positionVectorToFront(object, distance) {
    
            var cameraPosition = object.position;
            var cameraRotation = object.rotation;
            
            var yaw = degreesToRadians(-90 - cameraRotation.x);
            var pitch = degreesToRadians(0 - cameraRotation.y);
            
            var frontVector = new Object();
            frontVector.x = Math.cos(pitch) * Math.cos(yaw);
            frontVector.x = frontVector.x * distance;
            
            frontVector.y = Math.sin(pitch);
            frontVector.y = frontVector.y * distance;
            
            frontVector.z = Math.cos(pitch) * Math.sin(yaw);
            frontVector.z = frontVector.z * distance;
            
            var targetPosition = copyVector(cameraPosition);
            targetPosition.x += frontVector.x;
            targetPosition.y += frontVector.y;
            targetPosition.z += frontVector.z;
            
            var outputVector = new Object();
            
            outputVector.x = targetPosition.x;
            outputVector.y = targetPosition.y;
            outputVector.z = targetPosition.z;
            
            return outputVector;
}

function degreesToRadians(radians) {
    return radians * 0.01745;
}

function multipyVectorScalar(vector, scalar) {
    var vectorCopy = vector;
    vectorCopy.x = vectorCopy.x * scalar;
    vectorCopy.y = vectorCopy.y * scalar;
    vectorCopy.x = vectorCopy.z * scalar;
    return vectorCopy;
}

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

function pushBackValueToArray(value, array) {
    array[length] = value;
}
