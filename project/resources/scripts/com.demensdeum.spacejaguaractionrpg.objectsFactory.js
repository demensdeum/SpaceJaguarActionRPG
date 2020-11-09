function ObjectsFactory() {
    this.jag = function() {
        var abilitiesFactory = new ObjectAbilitiesFactory();
        var jag = new Object();
        jag.name = "Jag";
        jag.health = abilitiesFactory.health(10);
        jag.maxHealth = abilitiesFactory.maxHealth(10);
        jag.bladeFightMin = abilitiesFactory.bladeFightMin(3);
        jag.bladeFightMax = abilitiesFactory.bladeFightMax(6);
        jag.hunger = abilitiesFactory.hunger(24);
        jag.hungerMax = abilitiesFactory.hungerMax(48);
        jag.liveForHours = function(hours) {
          this.hunger.points -= hours;
        };
        jag.isDead = function() {
          return this.health.points < 1 || this.hunger.points < 1;
        };
        return jag;
    };

    this.startShip = function() {
      var namesFactory = new NamesFactory();
      var abilitiesFactory = new ObjectAbilitiesFactory();
      var ship = new Ship();
      ship.name = namesFactory.generateShipName();
      ship.health = abilitiesFactory.health(70);
      ship.maxHealth = abilitiesFactory.maxHealth(100);
      ship.fusion = abilitiesFactory.fusion(100);
      ship.maxFusion = abilitiesFactory.maxFusion(300);
      return ship;
    };
};
