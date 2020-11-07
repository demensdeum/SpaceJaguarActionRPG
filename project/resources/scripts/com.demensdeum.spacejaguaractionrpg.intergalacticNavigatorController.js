function IntergalacticNavigatorController(delegate) {
  this.delegate = delegate;
  this.step = function() {
    var action = prompt("\
    1. Go to random space!\
    2. Back to captain seat\
    ");
    if (action == "1") {
      prompt("TODO: Implement");
    }
    else if (action == "2") {
      this.delegate.didRequestIntergalacticNavigatorControllerGoToCaptainSeat(this);
    }
  };
};
