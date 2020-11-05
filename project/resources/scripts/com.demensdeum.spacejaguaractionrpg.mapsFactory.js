function MapsFactory() {
    this.generateDestroyedSpaceStation = function() {
        
        var mazeGeneratorParams = new Object();
        mazeGeneratorParams.mapWidth  = 100; 
        mazeGeneratorParams.mapHeight = 30; 
        mazeGeneratorParams.maxLines = Math.randInt(60, 100);
        mazeGeneratorParams.lineLength = Math.randInt(8, 16);
        mazeGeneratorParams.numberOfRuns = Math.randInt(1, 3);
        mazeGeneratorParams.cursorSizeWidth = 2;
        mazeGeneratorParams.cursorSizeHeight = 2;
        mazeGeneratorParams.enemyChance = 0;
        mazeGeneratorParams.chestChance = 90;
        mazeGeneratorParams.mazeChance = 0;
        mazeGeneratorParams.townChance = 0;
        
        var namesFactory = new NamesFactory();
        var maze = CreateMazeGenerator().generateMaze(mazeGeneratorParams);
        maze.name = namesFactory.generateSpaceStationName();
        return maze;
    };
};
