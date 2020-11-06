function NewGameController() {

  this.initializeIfNeeded = function() {
            if (this.initialized === undefined) {
                this.initialized = true;

                var objectsFactory = new ObjectsFactory();
                this.gameplayData = new GameplayData();
                this.gameplayData.jag = objectsFactory.jag();

                this.generateStartLocation();
            }
  };

  this.generateStartLocation = function() {
            var mapsFactory = new MapsFactory();
            var startLocation = mapsFactory.generateDestroyedSpaceStation();
            this.gameplayData.location = startLocation;
            var mazeRepresenter = new MazeRepresenter();
            mazeRepresenter.representMaze(startLocation);
            addDefaultCameraAtXYZAndRotationXYZ(1, 0.03278, 0, 90, 0, 0);
            this.playerControls = CreatePlayerControls("Jag", this, this.gameplayData);
            this.cameraControls = CreateCameraControls("Jag");
  };

  this.step = function() {
            this.initializeIfNeeded();
            this.playerControls.step();
            this.cameraControls.step();
  };
};
