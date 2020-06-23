function CreateMazeGenerator() {
    var mazeGenerator = {
        generateMaze : function() {
            var floor = createObject();
            floor.name = "floor";
            floor.modelPath = "com.demensdeum.spacejaguaractionrpg.floor.fsglmodel";
            floor.position.y -= 2;
            floor.position.x = x*2;
            floor.position.z = z*2;
            addObject(floor);
            
            var wall = createObject();
            wall.name = "wall";
            wall.modelPath = "com.demensdeum.spacejaguaractionrpg.wall.fsglmodel";
            wall.position.x = 0;
            wall.position.y -= 2;
            wall.position.z = 0;
            addObject(wall);
        }
    };
    return mazeGenerator;
};
