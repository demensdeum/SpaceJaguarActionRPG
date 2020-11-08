function IntergalacticNavigatorController(delegate) {
  this.delegate = delegate;
  this.step = function() {
    var action = prompt("\
    1. Go to random location!\
    2. Back to captain seat\
    ");
    if (action == "1") {
      removeAllObjects();
      this.delegate.intergalacticNavigatorControllerDidRequestGoToRandomLocation(this);
    }
    else if (action == "2") {
      this.delegate.intergalacticNavigatorControllerDidRequestGoToCaptainSeat(this);
    }
  };
};
