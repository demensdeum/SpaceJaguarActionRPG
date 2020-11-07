function ObjectsFactory() {
    this.jag = function() {
        var abilitiesFactory = new ObjectAbilitiesFactory();
        var jag = new Object();
        jag.name = "Jag";
        jag.health = abilitiesFactory.health(10);
        jag.maxHealth = abilitiesFactory.maxHealth(10);
        jag.bladeFightMin = abilitiesFactory.bladeFightMin(3);
        jag.bladeFightMax = abilitiesFactory.bladeFightMax(6);
        return jag;
    };

    this.startShip = function() {
      var namesFactory = new NamesFactory();
      var abilitiesFactory = new ObjectAbilitiesFactory();
      var ship = new Object();
      ship.name = namesFactory.generateShipName();
      ship.health = abilitiesFactory.health(70);
      ship.maxHealth = abilitiesFactory.maxHealth(100);
      ship.fusion = abilitiesFactory.fusion(100);
      ship.maxFusion = abilitiesFactory.maxFusion(300);
      return ship;
    };
};
