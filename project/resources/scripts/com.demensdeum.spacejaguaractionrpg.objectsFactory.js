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
};
