function SpaceStationController(delegate, gameplayData) {
  this.delegate = delegate;
  this.gameplayData = gameplayData;
  this.step = function() {
    print("TODO! This controller suppose to be ingame map");
    var action = prompt("Spacestation Menu:\
    1. Buy 5 snacks for 100B\
    2. Buy 1 repairbot for 200B\
    3. Buy 1 fusion block for 50B\
    4. Try to buy map to artifacts\
    5. Try to recruit crew\
    6. Heal at doctor's place 10B\
    7. Save at cloning center\
    8. Back to ship\
    ");
    if (action == "1") {
      var objectsFactory = new ObjectsFactory();
      this.gameplayData.bits -= 100;
      this.gameplayData.ship.addItemToStorage(objectsFactory.randomSnack());
      this.gameplayData.ship.addItemToStorage(objectsFactory.randomSnack());
      this.gameplayData.ship.addItemToStorage(objectsFactory.randomSnack());
      this.gameplayData.ship.addItemToStorage(objectsFactory.randomSnack());
      this.gameplayData.ship.addItemToStorage(objectsFactory.randomSnack());
    }
    else if (action == "2") {
      var objectsFactory = new ObjectsFactory();
      this.gameplayData.bits -= 200;
      this.gameplayData.ship.addItemToStorage(objectsFactory.repairBot());
    }
    else if (action == "3") {
      var objectsFactory = new ObjectsFactory();
      this.gameplayData.bits -= 50;
      this.gameplayData.ship.addItemToStorage(objectsFactory.fusionBlock());
    }
    else if (action == "4") {
      prompt("TODO: Buy map to artifacts");
    }
    else if (action == "5") {
      prompt("TODO: Recruit crew");
    }
    else if (action == "6") {
      this.gameplayData.bits -= 10;
      this.gameplayData.jag.healAll();
    }
    else if (action == "7") {
      prompt("TODO: Cloning center");
    }
    else if (action == "8") {
      this.delegate.spaceShipControllerDidRequestGoBackToSpaceShip(this);
    }
  };

};
