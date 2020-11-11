function ObjectsFactory() {
    this.jag = function() {
        var jag = new Jag();
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
