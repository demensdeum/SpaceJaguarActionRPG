function MapSceneController(delegate, gameplayData) {
  this.delegate = delegate;
  this.gameplayData = gameplayData;

  this.initializeIfNeeded = function() {
    if (this.initialized != true) {
        this.initialized = true;
        this.interactionController = new InteractionController(this, this.gameplayData);
        this.playerControls = CreatePlayerControls("Jag", this, this.gameplayData);
        this.cameraControls = CreateCameraControls("Jag");
    }
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

  this.playerControlsDidRequestTeleportToSpaceship = function(playerControls) {
    this.delegate.newGameControllerDidRequestExit(this);
  };

  this.interactionControllerDidRequestExitFromLocation = function(interactionController) {
    this.delegate.newGameControllerDidRequestExit(this);
  };

};
