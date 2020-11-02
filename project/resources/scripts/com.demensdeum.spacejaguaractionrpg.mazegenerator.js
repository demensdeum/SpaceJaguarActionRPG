function CreateMazeGenerator() {
    var mazeGenerator = {
        generateMaze : function(mazeGeneratorParams) {
            this.generatedMap = {};
            this.clearMap(mazeGeneratorParams);
            
            for (var i = 0; i < mazeGeneratorParams.numberOfRuns; i++) {
                var cursor = new Object();
                cursor.x = mazeGeneratorParams.mapWidth / 2;
                cursor.z = mazeGeneratorParams.mapHeight / 2;
                cursor.sizeWidth = mazeGeneratorParams.cursorSizeWidth;
                cursor.sizeHeight = mazeGeneratorParams.cursorSizeHeight;
                var directions = ["left", "right", "up", "down"];
                for (var linesCount = 0; linesCount < mazeGeneratorParams.maxLines; linesCount++) {
                    var direction = directions[Math.randInt(0, directions.length - 1)];
                    this.drawLine(cursor, direction, mazeGeneratorParams);
                }
            }
            
		var output = new Object();
		output.maze = this.generatedMap;
		output.width = mazeGeneratorParams.mapWidth;
		output.height = mazeGeneratorParams.mapHeight;

            return output;
        },
        clearMap : function(mazeGeneratorParams) {
            for (var y = 0; y < mazeGeneratorParams.mapHeight; y++) {
                for (var x = 0; x < mazeGeneratorParams.mapWidth; x++) {
                    var name = x + "_" + y;
                    this.generatedMap[name] = "#";
                }
            }            
        },
        printGeneratedMap : function(mazeGeneratorParams) {
            print("Printed generated map");
            for (var y = 0; y < mazeGeneratorParams.mapHeight; y++) {
                var line = "";
                for (var x = 0; x < mazeGeneratorParams.mapWidth; x++) {
                    var name = x + "_" + y;
                    line += this.generatedMap[name];
                }
                print(line);
            }
            exit(1);
        },
        putFreeSpaceAtCursor : function(cursor) {
            for (var x = 0; x < cursor.sizeWidth; x++) {
                for (var y = 0; y < cursor.sizeHeight; y++) {
                    var name = (cursor.x + x) + "_" + (cursor.z + y);
                    this.generatedMap[name] = "_"; 
                }
            }
        },
        drawLine : function(cursor, direction, mazeGeneratorParams) {
            for (var blocksCount = 0; blocksCount < mazeGeneratorParams.lineLength; blocksCount++) {
                    this.putFreeSpaceAtCursor(cursor);

                    var diff = 1;
                    if (direction == "left") {
                        cursor.x -= diff;
                        if (cursor.x < 0) {
                            cursor.x = 0;
                        }
                    }
                    else if (direction == "right") {
                        cursor.x += diff;
                        if (cursor.x > mazeGeneratorParams.mapWidth - 1) {
                            cursor.x = mazeGeneratorParams.mapWidth - 1;
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
                        if (cursor.z > mazeGeneratorParams.mapHeight - 1) {
                            cursor.z = mazeGeneratorParams.mapHeight - 1;
                        }
                    }

                }
            }
    };
    return mazeGenerator;
};
