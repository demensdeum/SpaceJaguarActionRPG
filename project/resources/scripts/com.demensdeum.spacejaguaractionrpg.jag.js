function Jag() {

  var abilitiesFactory = new ObjectAbilitiesFactory();
  this.name = "Jag";
  this.health = abilitiesFactory.health(10);
  this.healthMax = abilitiesFactory.healthMax(10);
  this.bladeFightMin = abilitiesFactory.bladeFightMin(3);
  this.bladeFightMax = abilitiesFactory.bladeFightMax(6);
  this.hunger = abilitiesFactory.hunger(24);
  this.hungerMax = abilitiesFactory.hungerMax(48);
  this.energy = abilitiesFactory.energy(6);
  this.energyMax = abilitiesFactory.energyMax(48);


this.liveForHours = function(hours) {
  if (this.hunger.points > 0) {
    this.hunger.points -= hours;
  }
  else {
    this.health.points -= hours;
  }
  if (Math.randInt(0, 100) == 1) {
    if (this.energy.points > 0) {
      this.energy.points -= hours;
    }
    else {
      this.health.points -= hours;
    }
  }
};

this.isDead = function() {
  return this.health.points < 1;
};

this.eat = function(item) {
  if (item.type == ItemType.food) {
    this.hunger.points += 1;
    return new CallResult(true, "");
  }
  else {
    return new CallResult(false, "Jag can't eat: " + item.name + " of type: " + item.type);
  }
};

this.sleep = function(hours) {
  this.energy.points += hours * 5;
  if (this.energy.points > this.energyMax.points) {
    this.energy.points = this.energyMax.points;
  }
};

};
