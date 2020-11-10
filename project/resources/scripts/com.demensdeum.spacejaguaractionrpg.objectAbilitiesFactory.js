function ObjectAbilitiesFactory() {
    this.health = function(points) {
        var ability = new ObjectAbility("CHEAL", "Current health", points);
        return ability;
    };
    this.healthMax = function(points) {
        var ability = new ObjectAbility("MHEAL", "Max health", points);
        return ability;
    };
    this.fusion = function(points) {
        var ability = new ObjectAbility("FUSIN", "Current fusion fuel tank", points);
        return ability;
    };
    this.maxFusion = function(points) {
        var ability = new ObjectAbility("MFUSN", "Max fusion fuel tank", points);
        return ability;
    };
    this.bladeFightMin = function(points) {
        var ability = new ObjectAbility("BLDMN", "Blade fighting ability minimal", points);
        return ability;
    };
    this.bladeFightMax = function(points) {
        var ability = new ObjectAbility("BLDMX", "Blade fighting ability maximal", points);
        return ability;
    };
    this.hunger = function(points) {
      var ability = new ObjectAbility("HUNGR", "Hunger", points);
      return ability;
    };
    this.hungerMax = function(points) {
      var ability = new ObjectAbility("HUNGM", "Maximal hunger", points);
      return ability;
    };
    this.energy = function(points) {
      var ability = new ObjectAbility("ENERG", "Energy", points);
      return ability;
    };
    this.energyMax = function(points) {
      var ability = new ObjectAbility("ENRMX", "Energy max", points);
      return ability;
    };
};
