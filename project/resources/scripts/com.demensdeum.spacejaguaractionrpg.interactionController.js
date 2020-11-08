function InteractionController(delegate, gameplayData) {
  this.delegate = delegate;
  this.gameplayData = gameplayData;
  this.handlePlayerInteractionIfNeeded = function() {
      var jag = getObject("Jag");
      var x = Integer.parseInt(jag.position.x + 0.5);
      var y = Integer.parseInt(jag.position.z + 0.5);
      print("Jag x: " + x);
      print("Jag y: " + y);
      print("GameplayData: " + this.gameplayData);
      var cell = this.gameplayData.location.cellAtXY(x, y);
      if (cell == "X") {
        this.delegate.interactionControllerDidRequestExitFromLocation(this);
      }
  };
};
