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
    Health: " + ship.health.points + "/" + ship.healthMax.points + "\
    Fusion: " + ship.fusion.points + "/" + ship.fusionMax.points + "\
    Bits: " + this.gameplayData.bits + "B\
    Docked location: " + locationName + "\
    Jag hunger: " + this.gameplayData.jag.hunger.points + "/" + this.gameplayData.jag.hungerMax.points + "\
    Jag health: " + this.gameplayData.jag.health.points + "/" + this.gameplayData.jag.healthMax.points + "\
    Jag energy: " + this.gameplayData.jag.energy.points + "/" + this.gameplayData.jag.energyMax.points + "\
    1. Go to docked location\
    2. Fly to another place\
    3. Fill fusion tank\
    4. Repair ship\
    5. SOS\
    6. Eat\
    7. Sleep\
    ");
    if (action == "1") {
      if (this.gameplayData.location == null) {
        prompt("Not docked to any location!");
        return;
      }
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
    else if (action == "6") {
      this.eat();
    }
    else if (action == "7") {
      this.gameplayData.jag.sleep(8);
    }
  };

  this.useItemOfType = function(type, functionOwner, useFunction) {
    print("Input type: " + type);
    var didUse = false;
    var shouldLoop = true;
    var iterator = this.gameplayData.ship.storage.iterator();
    while (shouldLoop) {
      var item = iterator.next();
      if (item == null) {
        print("Null item");
        shouldLoop = false;
      }
      else if (item.type == type) {
          print("Item used");
          var result = useFunction(item, functionOwner);
          if (result.success) {
            iterator.remove();
            shouldLoop = false;
            didUse = true;
          }
          else {
            prompt(result.message);
          }
      }
    }

    if (didUse == false) {
      prompt("Nothing to use of type: " + type);
    }
  };

  this.tryToFillFusionTank = function() {
    var ship = this.gameplayData.ship;
    this.useItemOfType(ItemType.fusionBlock, ship, ship.STATIC_useItem);
  };

  this.eat = function() {
    var jag = this.gameplayData.jag;
    this.useItemOfType(ItemType.food, jag, this.gameplayData.jag.eat);
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
      var action = prompt("Ship arrived to help:\
      1. Fill 200 fusion for 200B\
      2. Buy 2kg snacks for 400B\
      3. No, go away!
      ");
      if (action == "1") {
        this.gameplayData.bits -= 200;
        this.gameplayData.ship.fillFusion(100);
      }
      else if (action == "2") {
        var objectsFactory = new ObjectsFactory();
        this.gameplayData.bits -= 200;
        this.gameplayData.ship.addItemToStorage(objectsFactory.randomSnack());
        this.gameplayData.ship.addItemToStorage(objectsFactory.randomSnack());
        this.gameplayData.ship.addItemToStorage(objectsFactory.randomSnack());
        this.gameplayData.ship.addItemToStorage(objectsFactory.randomSnack());
      }
    }
    else {
      prompt("No one answered to SOS signal...");
    }
  };

  this.tryToRepairShip = function() {
    var didRepair = false;
    var shouldLoop = true;
    var iterator = this.gameplayData.ship.storage.iterator();
    while (shouldLoop) {
      var item = iterator.next();
      if (item == null) {
        print("Null item");
        shouldLoop = false;
      }
      else if (item.type == ItemType.repairBot) {
          print("Repair");
          var result = this.gameplayData.ship.repair(100);
          if (result.success) {
            iterator.remove();
            shouldLoop = false;
            didRepair = true;
          }
          else {
            prompt(result.message);
          }
      }
      else {
        print("Not repair bot item: " + item.name + " of type: " + item.type);
        print("Not repair bot type: " + ItemType.repairBot);
      }
    }

    if (didRepair == false) {
      prompt("No repair bots are available");
    }
  };
}
