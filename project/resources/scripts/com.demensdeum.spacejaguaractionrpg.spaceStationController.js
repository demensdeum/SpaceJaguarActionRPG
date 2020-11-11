function SpaceStationController(delegate, gameplayData) {
  this.delegate = delegate;
  this.gameplayData = gameplayData;
  this.step = function() {
    print("TODO! This controller suppose to be in spaceship game map");
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

    }
    else if (action == "2") {

    }
    else if (action == "3") {

    }
    else if (action == "4") {

    }
    else if (action == "5") {

    }
    else if (action == "6") {

    }
    else if (action == "7") {

    }
    else if (action == "8") {
      this.delegate.spaceShipControllerDidRequestGoBackToSpaceShip(this);
    }
  };

};
