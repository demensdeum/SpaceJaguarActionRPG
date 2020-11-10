function ObjectsFactory() {
    this.jag = function() {
        var abilitiesFactory = new ObjectAbilitiesFactory();
        var jag = new Object();
        jag.name = "Jag";
        jag.health = abilitiesFactory.health(10);
        jag.healthMax = abilitiesFactory.healthMax(10);
        jag.bladeFightMin = abilitiesFactory.bladeFightMin(3);
        jag.bladeFightMax = abilitiesFactory.bladeFightMax(6);
        jag.hunger = abilitiesFactory.hunger(24);
        jag.hungerMax = abilitiesFactory.hungerMax(48);
        jag.energy = abilitiesFactory.energy(6);
        jag.energyMax = abilitiesFactory.energyMax(48);
        jag.liveForHours = function(hours) {
          if (this.hunger.points > 0) {
            this.hunger.points -= hours;
          }
          else {
            this.health.points -= hours;
          }
        };
        jag.isDead = function() {
          return this.health.points < 1;
        };
        jag.eat = function(item) {
          if (item.type == ItemType.food) {
            this.hunger.points += 1;
            return new CallResult(true, "");
          }
          else {
            return new CallResult(false, "Jag can't eat: " + item.name + " of type: " + item.type);
          }
        };
        jag.sleep = function(hours) {
          this.energy.points += hours;
          if (this.energy.points > this.energyMax.points) {
            this.energy.points = this.energyMax.points;
          }
        };
        return jag;
    };

    this.startShip = function() {
      var namesFactory = new NamesFactory();
      var abilitiesFactory = new ObjectAbilitiesFactory();
      var ship = new Ship();
      ship.name = namesFactory.generateShipName();
      ship.health = abilitiesFactory.health(70);
      ship.healthMax = abilitiesFactory.healthMax(100);
      ship.fusion = abilitiesFactory.fusion(100);
      ship.maxFusion = abilitiesFactory.maxFusion(300);
      return ship;
    };

    this.randomSnack = function() {
      var snack = new Object();
      snack.name = "Snack'O'Bity!";
      snack.type = ItemType.food;
      return snack;
    };
};
