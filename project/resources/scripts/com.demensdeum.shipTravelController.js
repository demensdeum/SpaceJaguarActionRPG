function ShipTravelController(delegate, gameplayData) {
  this.delegate = delegate;
  this.gameplayData = gameplayData;
  this.output = "o";

  this.step = function() {
    this.output += "-";
    print(this.output + ">");
    var travelEvent = Math.randInt(0, 1000);
    if (travelEvent == 1) {
      prompt("Arrived to some random planet!");
      this.delegate.controllerDidFinish(this);
    }
  };
}
