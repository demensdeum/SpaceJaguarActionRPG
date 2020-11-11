function ObjectAbilitiesFactory() {
    this.health = function(points) {
        var ability = new ObjectAbility("CUHEAL", "Current health", points);
        return ability;
    };
    this.healthMax = function(points) {
        var ability = new ObjectAbility("MXHEAL", "Max health", points);
        return ability;
    };
    this.fusion = function(points) {
        var ability = new ObjectAbility("CFUSIN", "Current fusion fuel tank", points);
        return ability;
    };
    this.fusionMax = function(points) {
        var ability = new ObjectAbility("MXFUSN", "Max fusion fuel tank", points);
        return ability;
    };
    this.bladeFightMin = function(points) {
        var ability = new ObjectAbility("BLDMIN", "Blade fighting ability minimal", points);
        return ability;
    };
    this.bladeFightMax = function(points) {
        var ability = new ObjectAbility("BLDMAX", "Blade fighting ability maximal", points);
        return ability;
    };
    this.hunger = function(points) {
      var ability = new ObjectAbility("HUNGER", "Hunger", points);
      return ability;
    };
    this.hungerMax = function(points) {
      var ability = new ObjectAbility("HUNGMX", "Maximal hunger", points);
      return ability;
    };
    this.energy = function(points) {
      var ability = new ObjectAbility("ENERGY", "Energy", points);
      return ability;
    };
    this.energyMax = function(points) {
      var ability = new ObjectAbility("ENRMAX", "Energy max", points);
      return ability;
    };
};
