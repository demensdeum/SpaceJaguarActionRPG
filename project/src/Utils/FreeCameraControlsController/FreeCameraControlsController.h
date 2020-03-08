#ifndef CUBEARTPROJECTFREECAMERACONTROLSCONTROLLER_H_
#define CUBEARTPROJECTFREECAMERACONTROLSCONTROLLER_H_

#include <glm/glm.hpp>
#include "FreeCameraControlsControllerDelegate.h"
#include <FlameSteelEngineGameToolkit/IO/Input/InputController.h>
#include <FlameSteelCore/SharedNotNullPointer.h>
#include <FlameSteelEngineGameToolkit/Data/Components/Vector/FSEGTVector.h>

using namespace FlameSteelCore::Utils;
using namespace FlameSteelEngine::GameToolkit;
using namespace FlameSteelCore::Utils::Shortcuts;

namespace FlameSteelEngine {
namespace GameToolkit {
namespace Utils {
class FreeCameraControlsController: public enable_shared_from_this<FreeCameraControlsController> {

public:
    FreeCameraControlsController(NotNull<Object> camera, NotNull<InputController> inputController, shared_ptr<FreeCameraControlsControllerDelegate> delegate);
    void step();

private:
    NotNull<Object> camera;
    NotNull<InputController> inputController;
    weak_ptr<FreeCameraControlsControllerDelegate> delegate;

    float cameraX = -90.0f;
    float cameraY = 0;

    void translateByRotation(float x, float y, float z);
    void rotateByPointerIfNeeded();

    shared_ptr<FSEGTTouch> touch;
    int touchCameraX = 0;
    int touchCameraY = 0;
};
};
};
};

#endif