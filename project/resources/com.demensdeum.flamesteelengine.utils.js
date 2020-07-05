function printVector(vector) {
    print("Vector: x: " + vector.x + " y: " + vector.y + " z: " + vector.z);
}

function printMatrix(matrix) {
    print("Print Matrix");
    var outputString = "\n";    
    var rows = [matrix.firstRow, matrix.secondRow, matrix.thirdRow, matrix.fourRow];
    for (var x = 0; x < rows.length; x++) {
        var row = rows[x];
        for (var y = 0; y < row.length; y++) {
            outputString = outputString + row[y] + ",";
        }
        outputString = outputString + "\n";
    }
    print(outputString);    
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

function mat4MulMat4(lhsMatrix, rhsMatrix) {
    
    printMatrix(lhsMatrix);
    printMatrix(rhsMatrix);
    exit(1);
    
    var outputMatrix = new Object();
    outputMatrix.firstRow = [0, 0, 0, 0];
    outputMatrix.secondRow = [0, 0, 0, 0];
    outputMatrix.thirdRow = [0, 0, 0, 0];
    outputMatrix.fourRow = [0, 0, 0, 0];
    
    outputMatrix.firstRow[0] = (lhsMatrix.firstRow[0] * lhsMatrix.firstRow[1] * lhsMatrix.firstRow[2] * lhsMatrix.firstRow[3]) * (rhsMatrix.firstRow[0] * rhsMatrix.secondRow[0] * rhsMatrix.thirdRow[0] * rhsMatrix.fourRow[0]);
    outputMatrix.firstRow[1] = (lhsMatrix.firstRow[0] * lhsMatrix.firstRow[1] * lhsMatrix.firstRow[2] * lhsMatrix.firstRow[3]) * (rhsMatrix.firstRow[1] * rhsMatrix.secondRow[1] * rhsMatrix.thirdRow[1] * rhsMatrix.fourRow[1]);
    outputMatrix.firstRow[2] = (lhsMatrix.firstRow[0] * lhsMatrix.firstRow[1] * lhsMatrix.firstRow[2] * lhsMatrix.firstRow[3]) * (rhsMatrix.firstRow[2] * rhsMatrix.secondRow[2] * rhsMatrix.thirdRow[2] * rhsMatrix.fourRow[2]);
    outputMatrix.firstRow[3] = (lhsMatrix.firstRow[0] * lhsMatrix.firstRow[1] * lhsMatrix.firstRow[2] * lhsMatrix.firstRow[3]) * (rhsMatrix.firstRow[3] * rhsMatrix.secondRow[3] * rhsMatrix.thirdRow[3] * rhsMatrix.fourRow[3]);
    
    outputMatrix.secondRow[0] = (lhsMatrix.secondRow[0] * lhsMatrix.secondRow[1] * lhsMatrix.secondRow[2] * lhsMatrix.secondRow[3]) * (rhsMatrix.firstRow[0] * rhsMatrix.secondRow[0] * rhsMatrix.thirdRow[0] * rhsMatrix.fourRow[0]);
    outputMatrix.secondRow[1] = (lhsMatrix.secondRow[0] * lhsMatrix.secondRow[1] * lhsMatrix.secondRow[2] * lhsMatrix.secondRow[3]) * (rhsMatrix.firstRow[1] * rhsMatrix.secondRow[1] * rhsMatrix.thirdRow[1] * rhsMatrix.fourRow[1]);
    outputMatrix.secondRow[2] = (lhsMatrix.secondRow[0] * lhsMatrix.secondRow[1] * lhsMatrix.secondRow[2] * lhsMatrix.secondRow[3]) * (rhsMatrix.firstRow[2] * rhsMatrix.secondRow[2] * rhsMatrix.thirdRow[2] * rhsMatrix.fourRow[2]);
    outputMatrix.secondRow[3] = (lhsMatrix.secondRow[0] * lhsMatrix.secondRow[1] * lhsMatrix.secondRow[2] * lhsMatrix.secondRow[3]) * (rhsMatrix.firstRow[3] * rhsMatrix.secondRow[3] * rhsMatrix.thirdRow[3] * rhsMatrix.fourRow[3]);

    outputMatrix.thirdRow[0] = (lhsMatrix.thirdRow[0] * lhsMatrix.thirdRow[1] * lhsMatrix.thirdRow[2] * lhsMatrix.thirdRow[3]) * (rhsMatrix.firstRow[0] * rhsMatrix.secondRow[0] * rhsMatrix.thirdRow[0] * rhsMatrix.fourRow[0]);
    outputMatrix.thirdRow[1] = (lhsMatrix.thirdRow[0] * lhsMatrix.thirdRow[1] * lhsMatrix.thirdRow[2] * lhsMatrix.thirdRow[3]) * (rhsMatrix.firstRow[1] * rhsMatrix.secondRow[1] * rhsMatrix.thirdRow[1] * rhsMatrix.fourRow[1]);
    outputMatrix.thirdRow[2] = (lhsMatrix.thirdRow[0] * lhsMatrix.thirdRow[1] * lhsMatrix.thirdRow[2] * lhsMatrix.thirdRow[3]) * (rhsMatrix.firstRow[2] * rhsMatrix.secondRow[2] * rhsMatrix.thirdRow[2] * rhsMatrix.fourRow[2]);
    outputMatrix.thirdRow[3] = (lhsMatrix.thirdRow[0] * lhsMatrix.thirdRow[1] * lhsMatrix.thirdRow[2] * lhsMatrix.thirdRow[3]) * (rhsMatrix.firstRow[3] * rhsMatrix.secondRow[3] * rhsMatrix.thirdRow[3] * rhsMatrix.fourRow[3]);    

    outputMatrix.fourRow[0] = (lhsMatrix.fourRow[0] * lhsMatrix.fourRow[1] * lhsMatrix.fourRow[2] * lhsMatrix.fourRow[3]) * (rhsMatrix.firstRow[0] * rhsMatrix.secondRow[0] * rhsMatrix.thirdRow[0] * rhsMatrix.fourRow[0]);
    outputMatrix.fourRow[1] = (lhsMatrix.fourRow[0] * lhsMatrix.fourRow[1] * lhsMatrix.fourRow[2] * lhsMatrix.fourRow[3]) * (rhsMatrix.firstRow[1] * rhsMatrix.secondRow[1] * rhsMatrix.thirdRow[1] * rhsMatrix.fourRow[1]);
    outputMatrix.fourRow[2] = (lhsMatrix.fourRow[0] * lhsMatrix.fourRow[1] * lhsMatrix.fourRow[2] * lhsMatrix.fourRow[3]) * (rhsMatrix.firstRow[2] * rhsMatrix.secondRow[2] * rhsMatrix.thirdRow[2] * rhsMatrix.fourRow[2]);
    outputMatrix.fourRow[3] = (lhsMatrix.fourRow[0] * lhsMatrix.fourdRow[1] * lhsMatrix.fourRow[2] * lhsMatrix.fourdRow[3]) * (rhsMatrix.firstRow[3] * rhsMatrix.secondRow[3] * rhsMatrix.thirdRow[3] * rhsMatrix.fourRow[3]);    
    
    printMatrix(outputMatrix);
    
    return outputMatrix;
}

function eulerRotationVectorFromMat4(matrix) {
    var rotationVector = new Object();
    rotationVector.x = Math.asin(-matrix.thirdRow[2]);
    if (Math.cos(rotationVector.x) > 0.0001)
    {
        rotationVector.y = Math.atan2(matrix.firstRow[3], matrix.thirdRow[3]);
        rotationVector.z = Math.atan2(matrix.secondRow[1], matrix.secondRow[2]);
    }
    else
    {
        rotationVector.y = 0.0f;
        rotationVector.z = Math.atan2(-matrix.firstRow[2], mat.firstRow[1]);
    }    
    
    return rotationVector;
}

function lookAt(sourceVector, frontVector) {
    
    print("lookAt");
    printVector(sourceVector);
    printVector(frontVector);
    
    var upVector = new Object();
    upVector.x = 0;
    upVector.y = 1;
    upVector.z = 0;
    
    var rightVector = normalizeVector(crossVectors(frontVector, upVector));    
    
    print("Right vector");
    printVector(rightVector);
    
    var lhsMatrix = new Object();
    lhsMatrix.firstRow  = [rightVector.x, rightVector.y, rightVector.z, 0];
    lhsMatrix.secondRow = [upVector.x, upVector.y, upVector.z, 0];
    lhsMatrix.thirdRow  = [frontVector.x, frontVector.y, frontVector.z, 0];
    lhsMatrix.fourRow  = [0, 0, 0, 1];
    
    var rhsMatrix = new Object();
    rhsMatrix.firstRow = [1, 0, 0, -sourceVector.x];
    rhsMatrix.secondRow = [0, 1, 0, -sourceVector.y];
    rhsMatrix.thirdRow = [0, 0, 1, -sourceVector.z];
    rhsMatrix.fourRow = [0, 0, 0, 1];
        
    var matrix = mat4MulMat4(lhsMatrix, rhsMatrix);
    
    return matrix;
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
