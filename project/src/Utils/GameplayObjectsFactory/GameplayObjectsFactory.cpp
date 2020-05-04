#include "GameplayObjectsFactory.h"
#include <Utils/CubeBuilder/CubeBuilder.h>
#include <FlameSteelEngineGameToolkit/Data/Components/FSEGTFactory.h>

using namespace SpaceJaguarActionRPG;
using namespace FlameSteelEngine::GameToolkit::Utils;

NotNull<Object> GameplayObjectsFactory::makeJag(
    NotNull<InputController> 
) {
    auto jag = FSEGTFactory::makeOnSceneObject(
                   make_shared<string>("Jaguar"),
                   make_shared<string>("Jaguar"),
                   shared_ptr<string>(),
                   make_shared<string>("com.demensdeum.deathmaskgame.combatdrone.fsglmodel"),
                   shared_ptr<string>(),
                   10, 0, 10,
                   1, 1, 1,
                   0, 0, 0,
                   0);
    return jag;
};
