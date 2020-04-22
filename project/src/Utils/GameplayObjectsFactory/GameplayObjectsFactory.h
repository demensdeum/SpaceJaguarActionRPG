#ifndef SPACEJAGUARACTIONRPGNATIVESTATICBUILDGAMEPLEYOBJECTSFACTORY_H_
#define SPACEJAGUARACTIONRPGNATIVESTATICBUILDGAMEPLEYOBJECTSFACTORY_H_

#include <FlameSteelCore/Object.h>
#include <FlameSteelCore/SharedNotNullPointer.h>
#include <FlameSteelEngineGameToolkit/IO/Input/InputController.h>
#include <Controllers/SceneController/ObjectControls/PlayerOwnerObjectControls/PlayerOwnerObjectControlsDelegate.h>

using namespace Shortcuts;
using namespace FlameSteelCore;
using namespace FlameSteelEngine::GameToolkit;

namespace SpaceJaguarActionRPG {

class GameplayObjectsFactory {

public:
	static NotNull<Object> makeJag(NotNull<InputController> inputController, weak_ptr<PlayerOwnerObjectControlsDelegate> delegate);

};

};

#endif