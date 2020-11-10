function ObjectState(health, healthMax) {
    var factory = new ObjectAbilitiesFactory();
    this.health = factory.health(health);
    this.healthMax = factory.healthMax(healthMax);
};
