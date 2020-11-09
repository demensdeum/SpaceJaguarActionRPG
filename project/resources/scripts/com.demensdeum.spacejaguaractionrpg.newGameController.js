function NewGameController(delegate, gameplayData) {
  this.delegate = delegate;
  this.gameplayData = gameplayData;

  this.step = function() {
    var objectsFactory = new ObjectsFactory();
    this.gameplayData.jag = objectsFactory.jag();
    this.gameplayData.ship = objectsFactory.startShip();
    this.gameplayData.bits = 500;
    var mapsFactory = new MapsFactory();
    var startLocation = mapsFactory.generateDestroyedSpaceStation();
    var mazeRepresenter = new MazeRepresenter();
    mazeRepresenter.representMaze(startLocation);
    addDefaultCamera();
    this.gameplayData.location = new Location(startLocation);
    this.delegate.controllerDidFinish(this);
  };

};
