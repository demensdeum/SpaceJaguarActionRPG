wallsCounter = 0;
wallsLastTimeRectangleStartPointX = 0;
wallsLastTimeRectangleStartPointZ = 0;

kTilesMapWidth = kMapWidth + (kMapWidth * 0.3);
kTilesMapHeight = kMapWidth + (kMapHeight * 0.3 );

function positionIsNotTooClose(position) {
    if (wallsLastTimeRectangleStartPointX === undefined || wallsLastTimeRectangleStartPointZ === undefined) {
        wallsLastTimeRectangleStartPointX = position.x;
        wallsLastTimeRectangleStartPointZ = position.z;
        return true;
    }
    else {
        var distanceX = wallsLastTimeRectangleStartPointX - position.x;
        var distanceZ = wallsLastTimeRectangleStartPointZ - position.z;
        var distance = Math.abs(distanceX) + Math.abs(distanceZ);
                
        var result = distance < kMapWidth / 2;
        
        if (result) {
            wallsLastTimeRectangleStartPointX = position.x;
            wallsLastTimeRectangleStartPointZ = position.z;
        }
        
        return result;
    }
}

function drawHorizontalLine(x, z, width) {
    for (var i = 0; i < width; i++) {
        var position = new Object();
        position.x = x + (i * 0.4);
        position.z = z;
        var wallName = "wall" + wallsCounter;
        var wall = new Object();
        wall.name = wallName;
        wall.modelPath = "com.spacejaguaractionrpg.wall.fsglmodel";
        wall.position = position;
        addObject(wall);
        wallsCounter += 1;
    }
}

function drawVerticalLine(x, z, height) {
    for (var i = 0; i < height; i++) {
        var position = new Object();
        position.x = x;
        position.z = z + (i * 0.4);
        var wallName = "wall" + wallsCounter;
        var wall = new Object();
        wall.name = wallName;
        wall.modelPath = "com.spacejaguaractionrpg.wall.fsglmodel";
        wall.position = position;
        addObject(wall);
        wallsCounter += 1;
    }
}

function addWallsRectangle() {
    var startPosition = new Object();
    var needToExit = false;
    
    for (var i = 0; (i < 30 && needToExit == false); i++ ) {
        startPosition.x = Math.randInt(0, kMapWidth) * 0.4;
        startPosition.y = 0;
        startPosition.z = Math.randInt(0, kMapHeight) * 0.4;
        needToExit = positionIsNotTooClose(startPosition);
    }
   
    var rectangleWidth = kTilesMapWidth;
    var rectangleHeight = kTilesMapHeight;
    
    drawHorizontalLine(startPosition.x, startPosition.z, rectangleWidth);
    drawHorizontalLine(startPosition.x, startPosition.z + ((rectangleHeight - 1) * 0.4), rectangleWidth);
    drawVerticalLine(startPosition.x, startPosition.z + 0.4, rectangleHeight - 2);
    drawVerticalLine(startPosition.x + ((rectangleWidth - 1) * 0.4), startPosition.z + 0.4, rectangleHeight - 2);
}

function addWallsToScene() {
    var rectanglesCount = 6;
    for (var i = 0; i < rectanglesCount; i++) {
        addWallsRectangle();
    }
}
