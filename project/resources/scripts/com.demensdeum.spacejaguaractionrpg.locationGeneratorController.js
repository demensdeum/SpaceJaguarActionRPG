function LocationGeneratorController(delegate, gameplayData) {
  this.delegate = delegate;
  this.gameplayData = gameplayData;

  this.step = function() {
    var mapsFactory = new MapsFactory();
    var startLocation = mapsFactory.generateDestroyedSpaceStation();
    var mazeRepresenter = new MazeRepresenter();
    mazeRepresenter.representMaze(startLocation);
    addDefaultCamera();
    this.gameplayData.location = new Location(startLocation);
    this.delegate.controllerDidFinish(this);
  };

};
