#ifndef SPACEJAGUARACTIONRPGNATIVESTATICBUILDGAMEPLEYOBJECTSFACTORY_H_
#define SPACEJAGUARACTIONRPGNATIVESTATICBUILDGAMEPLEYOBJECTSFACTORY_H_

#include <FlameSteelCore/Object.h>
#include <FlameSteelCore/SharedNotNullPointer.h>
#include <FlameSteelEngineGameToolkit/IO/Input/InputController.h>

using namespace Shortcuts;
using namespace FlameSteelCore;
using namespace FlameSteelEngine::GameToolkit;

namespace SpaceJaguarActionRPG {

class GameplayObjectsFactory {

public:
    static NotNull<Object> makeJag(NotNull<InputController> inputController);

};

};

#endif