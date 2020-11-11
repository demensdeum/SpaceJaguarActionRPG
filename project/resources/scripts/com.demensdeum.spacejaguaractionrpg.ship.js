function Ship() {
  this.storage = new Storage(10);

  this.repair = function(points) {
    this.health.points += points;
    if (this.health.points > this.healthMax.points) {
      this.health.points = this.healthMax.points;
    }
    return new CallResult(true, "");
  };

  this.addItemToStorage = function(item) {
    var result = this.storage.addItem(item);
    if (result.success == false) {
      prompt(result.message);
    }
  };

  this.drainFusion = function(points) {
    if (this.fusion.points > 0) {
      this.fusion.points -= points;
    }
    else {
      this.fusion.points = 0;
    }
  };

  this.fillFusion = function(points) {
    this.fusion.points += points;
    if (this.fusion.points > this.fusionMax.points) {
      this.fusion.points = this.fusionMax.points;
    }
    return new CallResult(true, "");
  };
};
