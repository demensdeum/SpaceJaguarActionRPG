#include "GameplayObjectsFactory.h"
#include <Utils/CubeBuilder/CubeBuilder.h>
#include <Controllers/SceneController/ObjectControls/PlayerOwnerObjectControls/PlayerOwnerObjectControls.h>

using namespace SpaceJaguarActionRPG;
using namespace FlameSteelEngine::GameToolkit::Utils;

NotNull<Object> GameplayObjectsFactory::makeJag(
	NotNull<InputController> inputController,
	 weak_ptr<PlayerOwnerObjectControlsDelegate> delegate
) {
	auto jag = make_shared<CubeBuilder>()->makeCube(0, 0, 0);
	auto controls = make_shared<PlayerOwnerObjectControls>();
	controls->setPuppetAndInputControllerAndDelegate(jag, inputController, delegate);
	controls->setClassIdentifier(make_shared<string>("ObjectControls"));
	controls->setInstanceIdentifier(make_shared<string>("ObjectControls"));
	jag->addComponent(controls);
	return jag;
};
