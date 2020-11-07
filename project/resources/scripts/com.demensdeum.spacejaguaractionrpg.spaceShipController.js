function SpaceShipController(delegate, gameplayData) {
  this.delegate = delegate;
  this.gameplayData = gameplayData;
  this.step = function() {
      var location = this.gameplayData.location;
      var ship = this.gameplayData.ship;
      var action = prompt("\
      Ship: " + ship.name +"\
      Health: " + ship.health.points + "/" + ship.maxHealth.points + "\
      Fusion: " + ship.fusion.points + "/" + ship.maxFusion.points + "\
      Docked location: " + location.name() + "\n
      1. Go to docked location\
      2. Fly to another place\
      3. Fill fusion tank\
      4. Repair ship\
      ");
      if (action == "1") {
        this.delegate.shipControllerDidRequestGoToDockedLocation(this);
      }
      else if (action == "2") {
        this.delegate.shipControllerDidRequestFlyToAnotherPlace(this);
      }
      else if (action == "3") {
        this.tryToFillFusionTank();
      }
      else if (action == "4") {
        this.tryToRepairShip();
      }
  };

  this.tryToFillFusionTank = function() {
    prompt("No Fusion blocks are available");
  };

  this.tryToRepairShip = function() {
    prompt("No Repair bots are available");
  };
}
