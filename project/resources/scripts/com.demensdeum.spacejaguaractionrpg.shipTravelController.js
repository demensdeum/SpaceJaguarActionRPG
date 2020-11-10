function ShipTravelController(delegate, gameplayData) {
  this.delegate = delegate;
  this.gameplayData = gameplayData;
  this.output = "o";

  this.step = function() {
    if (this.gameplayData.location != null) {
      this.gameplayData.location = null;
    }
    var fusion = this.gameplayData.ship.fusion.points;
    var maxFusion = this.gameplayData.ship.maxFusion.points;

    if (fusion < 1) {
      this.output = "o";
      prompt("Ship is out of Fusion! You stuck in space without any fuel!");
      this.delegate.shipTravelControllerDidOutOfFuel(this);
    }
    else {

    this.output += "-";
    print("[Fusion: " + fusion + "/" + maxFusion + "] " +  this.output + ">");
    this.gameplayData.ship.drainFusion(1);
    var travelEvent = Math.randInt(0, 100);
    if (travelEvent == 1) {
      prompt("Arrived to some random location");
      this.output = "o";
      this.delegate.shipTravelControllerDidArriveAtSomeRandomLocation(this);
    }
  }
  };
}
