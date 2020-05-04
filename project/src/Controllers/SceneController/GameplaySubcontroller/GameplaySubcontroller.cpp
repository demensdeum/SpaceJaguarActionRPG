#include "GameplaySubcontroller.h"
#include <iostream>

using namespace std;
using namespace SpaceJaguarActionRPG;

void GameplaySubcontroller::addObject(NotNull<Object> object) {
    objects->addObject(object.sharedPointer());
}

void GameplaySubcontroller::step() {
}