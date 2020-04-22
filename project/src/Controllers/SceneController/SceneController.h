#ifndef FLAMESTEELENGINEPROJECTSCENECONTROLLER_H_
#define FLAMESTEELENGINEPROJECTSCENECONTROLLER_H_

#include <FlameSteelCore/SharedNotNullPointer.h>
#include <FlameSteelEngineGameToolkit/Controllers/GameController.h>
#include <Utils/FreeCameraControlsController/FreeCameraControlsController.h>
#include <Controllers/SceneController/GameplaySubcontroller/GameplaySubcontroller.h>
#include <Controllers/SceneController/ObjectControls/PlayerOwnerObjectControls/PlayerOwnerObjectControlsDelegate.h>

using namespace Shortcuts;
using namespace SpaceJaguarActionRPG;
using namespace FlameSteelEngine::GameToolkit::Utils;

class SceneController: public GameController, public enable_shared_from_this<SceneController>, public FreeCameraControlsControllerDelegate, public PlayerOwnerObjectControlsDelegate {
  
public:
    void step();
    void freeCameraControlsControllerDidFinish(shared_ptr<FreeCameraControlsController> freeCameraControlsController);
    void playerOwnerObjectControlsDidFinish(shared_ptr<PlayerOwnerObjectControls> playerOwnerObjectControls);
    
private:
	void initialize();
	bool isInitialized = false;
	NotNull<Object> jagObject;
	NotNull<Object> camera;
	NotNull<InputController> inputController;
	NotNull<FreeCameraControlsController> freeCameraControlsController;
	NotNull<GameplaySubcontroller> gameplaySubcontroller;
};
#endif
