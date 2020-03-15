#include "GameplaySubcontroller.h"
#include <iostream>

using namespace std;
using namespace SpaceJaguarActionRPG;

void GameplaySubcontroller::addObject(NotNull<Object> object) {
	objects->addObject(object.sharedPointer());
}

void GameplaySubcontroller::step() {
	for (auto i = 0; i < objects->size(); i++) {
		auto object = objects->objectAtIndex(i);
		//auto controls = object->getComponent(make_shared<string>("ObjectControls"));
	}
}