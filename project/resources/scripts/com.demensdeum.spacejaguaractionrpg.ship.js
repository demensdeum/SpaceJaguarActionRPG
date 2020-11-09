function Ship() {
  this.drainFusion = function(points) {
    this.fusion.points -= points;
  };

  this.fillFusion = function(points) {
    this.fusion.points += points;
  };
};
