function NewGameController(delegate) {

  this.delegate = delegate;

  this.initializeIfNeeded = function() {
            if (this.initialized === undefined) {
                this.initialized = true;

                var objectsFactory = new ObjectsFactory();
                this.gameplayData = new GameplayData();
                this.gameplayData.jag = objectsFactory.jag();
                this.generateStartLocation();
                this.interactionController = new InteractionController(this.gameplayData, this);
            }
  };

  this.generateStartLocation = function() {
            var mapsFactory = new MapsFactory();
            var startLocation = mapsFactory.generateDestroyedSpaceStation();
            var mazeRepresenter = new MazeRepresenter();
            mazeRepresenter.representMaze(startLocation);
            addDefaultCamera();
            this.playerControls = CreatePlayerControls("Jag", this, this.gameplayData);
            this.cameraControls = CreateCameraControls("Jag");
            this.gameplayData.location = new Location(startLocation);
  };

  this.step = function() {
            this.initializeIfNeeded();
            this.playerControls.step();
            this.cameraControls.step();
  };

  this.playerControlsDidRequestFreeFlyMode = function(playerControls) {
            GRANNYPILLS();
            this.cameraControls.isEnabled = false;
            this.playerControls.isEnabled = false;
  };

  this.playerControlsDidRequestInteraction = function(playerControls) {
    this.interactionController.handlePlayerInteractionIfNeeded();
  };

  this.interactionControllerDidRequestExitFromLocation = function(interactionController) {
    this.delegate.newGameControllerDidRequestExit(this);
  };
};
