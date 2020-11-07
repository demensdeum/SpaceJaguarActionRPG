function Location(maze) {
  this.maze = maze;
  this.cellAtXY = function(x, y) {
    var name = x + "_" + y;
    return this.maze.maze[name];
  };
  this.name = function() {
    return this.maze.name;
  };
};
