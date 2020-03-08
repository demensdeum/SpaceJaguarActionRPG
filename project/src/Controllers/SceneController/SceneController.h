#ifndef FLAMESTEELENGINEPROJECTSCENECONTROLLER_H_
#define FLAMESTEELENGINEPROJECTSCENECONTROLLER_H_

#include <FlameSteelCore/SharedNotNullPointer.h>
#include <FlameSteelEngineGameToolkit/Controllers/GameController.h>
#include <Utils/FreeCameraControlsController/FreeCameraControlsController.h>

using namespace Shortcuts;
using namespace FlameSteelEngine::GameToolkit::Utils;

class SceneController: public GameController, public enable_shared_from_this<SceneController>, public FreeCameraControlsControllerDelegate {
  
public:
    void step();
    void freeCameraControlsControllerDidFinish(shared_ptr<FreeCameraControlsController> freeCameraControlsController);
    
private:
	void initialize();
	bool isInitialized = false;
	NotNull<Object> camera;
	NotNull<InputController> inputController;
	NotNull<FreeCameraControlsController> freeCameraControlsController;
};
#endif
