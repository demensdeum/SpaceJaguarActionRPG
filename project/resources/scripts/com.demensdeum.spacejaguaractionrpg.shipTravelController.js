function ShipTravelController(delegate, gameplayData) {
  this.delegate = delegate;
  this.gameplayData = gameplayData;
  this.output = "o";

  this.sosEncounter = function() {
    prompt("TODO: SOS Encounter");
  };

  this.step = function() {
    if (this.gameplayData.location != null) {
      this.gameplayData.location = null;
    }
    var fusion = this.gameplayData.ship.fusion.points;
    var fusionMax = this.gameplayData.ship.fusionMax.points;

    if (fusion < 1) {
      this.output = "o";
      prompt("Ship is out of Fusion! You stuck in space without any fuel!");
      this.delegate.shipTravelControllerDidOutOfFuel(this);
    }
    else {
      this.output += "-";
      print("[Fusion: " + fusion + "/" + fusionMax + "] " +  this.output + ">");
      this.gameplayData.ship.drainFusion(1);
      var travelEvent = Math.randInt(0, 100);
      if (travelEvent == 1) {
        prompt("Arrived to some random location");
        this.output = "o";
        this.delegate.shipTravelControllerDidArriveAtSomeRandomLocation(this);
      }
      else if (travelEvent == 2) {
        var place = "space station";
        if (Math.randInt(0,3) == 1) {
          place = "ship";
        }
        var action = prompt("While traveling you encounter *abandoned* " + place + ".\
        1. Dock it\
        2. Fly to destination");
        if (action == "1") {
          this.output = "o";
          this.delegate.shipTravelControllerDidArriveAtSomeRandomLocation(this);
        }
      }
      else if (travelEvent == 3) {
        var action = prompt("While traveling you encounter the space station.\
        1. Dock it\
        2. Fly to destination");
        if (action == "1") {
          this.output = "o";
          this.delegate.shipTravelControllerDidArriveAtSpaceStation(this);
        }
      }
      else if (travelEvent == 4) {
        var action = prompt("SOS signal received. Travel to source of signal?\
        1.Yes\
        2.No");
        if (action == 1) {
          this.sosEncounter();
        }
      }
    }
  };
}
