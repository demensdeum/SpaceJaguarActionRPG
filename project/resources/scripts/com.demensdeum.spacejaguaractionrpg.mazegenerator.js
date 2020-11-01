function CreateMazeGenerator() {
    var mazeGenerator = {
        generateMaze : function() {
            
            this.wallsMap = [];
            
            var floor = createObject();
            floor.name = "floor";
            floor.modelPath = "com.demensdeum.spacejaguaractionrpg.floor.fsglmodel";
            floor.position.y -= 2;
            floor.position.x = x*2;
            floor.position.z = z*2;
            addObject(floor);
            
            var cursor = new Object();
            this.randomizeCursorPosition(cursor);
            
            //var maxLines = Math.randInt(60, 100);
		var maxLines = 0;
            var directions = ["left", "right", "up", "down"];
            
            for (var linesCount = 0; linesCount < maxLines; linesCount++) {
                var direction = directions[Math.randInt(0, directions.length - 1)];
                this.drawLine(cursor, direction);
            }
        },
        randomizeCursorPosition : function(cursor) {
            cursor.x = Math.randInt(20, 80);
            cursor.z = Math.randInt(20, 80);
        },
        isWallsEmptyAtCursor : function(cursor) {
            var name = cursor.x + "_" + cursor.z;
            return this.wallsMap[name] != true;
        },
        drawLine : function(cursor, direction) {
            var lineLength = Math.randInt(6, 20);
            for (var blocksCount = 0; blocksCount < lineLength; blocksCount++) {
                if (this.isWallsEmptyAtCursor(cursor) == false) {
                    this.randomizeCursorPosition(cursor);
                }
                else {
                    var wall = this.createWallObject(cursor.x, cursor.z);
                    addObject(wall);                
                    var name = cursor.x + "_" + cursor.z;
                    this.wallsMap[name] = true;

                    var diff = 1;
                    if (direction == "left") {
                        cursor.x -= diff;
                        if (cursor.x < 0) {
                            cursor.x = 0;
                        }
                    }
                    else if (direction == "right") {
                        cursor.x += diff;
                        if (cursor.x > 99) {
                            cursor.x = 99;
                        }
                    }
                    else if (direction == "up") {
                        cursor.z -= diff;
                        if (cursor.z < 0) {
                            cursor.z = 0;
                        }
                    }
                    else if (direction == "down") {
                        cursor.z += diff;
                        if (cursor.z > 99) {
                            cursor.z = 99;
                        }
                    }
                    
                }
            }
        },
        createWallObject : function(x, z) {
            var wall = createObject();
            wall.name = "wall_" + x + "_" + y;
            wall.modelPath = "com.demensdeum.spacejaguaractionrpg.wall.fsglmodel";
            wall.position.x = x;
            wall.position.y -= 2;
            wall.position.z = z;
            return wall;
        }
    };
    return mazeGenerator;
};
