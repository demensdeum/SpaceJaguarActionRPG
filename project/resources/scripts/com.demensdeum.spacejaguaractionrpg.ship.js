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

  this.STATIC_useItem = function(item, ship) {
    if (item.type == ItemType.fusionBlock) {
      ship.fillFusion(200);
      return new CallResult(true, "");
    }
    else {
      return new CallResult(false, "Can't use item of type: " + item.type + " at ship");
    }
  };

  this.fillFusion = function(points) {
    this.fusion.points += points;
    if (this.fusion.points > this.fusionMax.points) {
      this.fusion.points = this.fusionMax.points;
    }
  };
};
