#ifndef SPACEJAGUARACTIONRPGNATIVESTATICBUILDPLAYEROWNEROBJECTCONTROLS_H_
#define SPACEJAGUARACTIONRPGNATIVESTATICBUILDPLAYEROWNEROBJECTCONTROLS_H_

#include <Controllers/SceneController/ObjectControls/ObjectControls.h>
#include <FlameSteelCore/SharedNotNullPointer.h>
#include <FlameSteelEngineGameToolkit/IO/Input/InputController.h>
#include "PlayerOwnerObjectControlsDelegate.h"

using namespace std;
using namespace Shortcuts;
using namespace FlameSteelEngine::GameToolkit;
using namespace SpaceJaguarActionRPG;


namespace SpaceJaguarActionRPG {

class PlayerOwnerObjectControls: public ObjectControls, public enable_shared_from_this<PlayerOwnerObjectControls> {

public:
	void step();
	void setPuppetAndInputControllerAndDelegate(
		NotNull<Object> puppet, 
		NotNull<InputController> inputController, 
		weak_ptr<SpaceJaguarActionRPG::PlayerOwnerObjectControlsDelegate> delegate
	);

private:
		NotNull<Object> puppet;
		NotNull<InputController> inputController;
		weak_ptr<SpaceJaguarActionRPG::PlayerOwnerObjectControlsDelegate> delegate;

};

};

#endif