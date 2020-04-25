#include "GameplaySubcontroller.h"
#include <Controllers/SceneController/ObjectControls/ObjectControls.h>
#include <iostream>

using namespace std;
using namespace SpaceJaguarActionRPG;

void GameplaySubcontroller::addObject(NotNull<Object> object) {
    objects->addObject(object.sharedPointer());
}

void GameplaySubcontroller::step() {
    for (auto i = 0; i < objects->size(); i++) {
        auto object = objects->objectAtIndex(i);
        auto controls = static_pointer_cast<ObjectControls>(object->getComponent(make_shared<string>("ObjectControls")));
        controls->step();
    }
}