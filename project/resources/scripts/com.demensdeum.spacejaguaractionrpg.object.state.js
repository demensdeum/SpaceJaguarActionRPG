function ObjectState(health, maxHealth) {
    var factory = new ObjectAbilitiesFactory();
    this.health = factory.health(health);
    this.maxHealth = factory.maxHealth(maxHealth);
};
