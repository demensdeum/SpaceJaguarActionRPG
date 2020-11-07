function ObjectAbilitiesFactory() {
    this.health = function(points) {
        var ability = new ObjectAbility("CHEAL", "Current health", points);
        return ability;
    };
    this.maxHealth = function(points) {
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
        var ability = new ObjectAbility("BLDMIN", "Blade fighting ability minimal", points);
        return ability;
    };
    this.bladeFightMax = function(points) {
        var ability = new ObjectAbility("BLDMAX", "Blade fighting ability maximal", points);
        return ability;
    };
};
