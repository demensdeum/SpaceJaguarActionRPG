function SpaceShipController(delegate, gameplayData) {
  this.delegate = delegate;
  this.gameplayData = gameplayData;
  this.step = function() {
      if (this.gameplayData.jag.isDead()) {
        prompt("Jag is dead :-(");
        removeAllObjects();
        this.delegate.spaceShipControllerDidRequestGameOver(this);
        return;
      }
      var location = this.gameplayData.location;
      var locationName = "<NO>";
      if (location != null) {
        locationName = location.name();
      }
      var ship = this.gameplayData.ship;
      var action = prompt("\
      Ship: " + ship.name +"\
      Health: " + ship.health.points + "/" + ship.maxHealth.points + "\
      Fusion: " + ship.fusion.points + "/" + ship.maxFusion.points + "\
      Bits: " + this.gameplayData.bits + "B\
      Docked location: " + locationName + "\
      Jag hunger: " + this.gameplayData.jag.hunger.points + "/" + this.gameplayData.jag.hungerMax.points + "\
      1. Go to docked location\
      2. Fly to another place\
      3. Fill fusion tank\
      4. Repair ship\
      5. SOS\
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
      else if (action == "5") {
        this.sos();
      }
  };

  this.sos = function() {
    var someoneArrivedToHelp = false;
    for (var i = 0; i < 4 && someoneArrivedToHelp == false; i++) {
      print("Waiting for hour to someone answer to SOS");
      this.gameplayData.jag.liveForHours(1);
      if (Math.randInt(0, 10) == 6) {
        someoneArrivedToHelp = true;
      }
    }
    if (someoneArrivedToHelp) {
    var action = prompt("Ship arrived to help: - Fill fusion for 200B?\n1.Yes\n2.No");
    if (action == 1) {
      if (this.gameplayData.bits < 200) {
        prompt("Not enough bits!");
      }
      else {
        this.gameplayData.bits -= 200;
        this.gameplayData.ship.fillFusion(100);
      }
    }
  }
  else {
    prompt("No one answered to SOS signal...");
  }
  };

  this.tryToFillFusionTank = function() {
    prompt("No Fusion blocks are available");
  };

  this.tryToRepairShip = function() {
    prompt("No Repair bots are available");
  };
}
