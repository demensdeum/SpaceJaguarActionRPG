#ifndef FLAMESTEELENGINEPROJECTSCENECONTROLLER_H_
#define FLAMESTEELENGINEPROJECTSCENECONTROLLER_H_

#define SPACEJAGUARACTIONRPG_FREEFLY 0

#include <Utils/AnimationController/AnimationController.h>
#include <FlameSteelCore/SharedNotNullPointer.h>
#include <FlameSteelEngineGameToolkit/IO/Input/InputController.h>
#include <FlameSteelEngineGameToolkit/Controllers/GameController.h>
#if SPACEJAGUARACTIONRPG_FREEFLY
#include <Utils/FreeCameraControlsController/FreeCameraControlsController.h>
#else
#include <Utils/AcuteAngleCameraController/AcuteAngleCameraController.h>
#endif
#include <Controllers/SceneController/GameplaySubcontroller/GameplaySubcontroller.h>
#include <Controllers/SceneController/ObjectControls/PlayerOwnerObjectControls/PlayerOwnerObjectControlsDelegate.h>

using namespace Shortcuts;
using namespace SpaceJaguarActionRPG;
using namespace FlameSteelEngine::GameToolkit::Utils;

class SceneController: public GameController, public enable_shared_from_this<SceneController>, public CameraControllerDelegate, public PlayerOwnerObjectControlsDelegate, public AnimationControllerDelegate {

public:
    void step();
    void cameraControllerDidFinish(shared_ptr<CameraController> cameraController);
    void playerOwnerObjectControlsDidFinish(shared_ptr<PlayerOwnerObjectControls> playerOwnerObjectControls);
    void animationControllerDidAddObject(shared_ptr<AnimationController> animationController, NotNull<Object> object);
    void animationControllerDidUpdateObject(shared_ptr<AnimationController> animationController, NotNull<Object> object);

private:
    void initialize();
    bool isInitialized = false;
    NotNull<Object> jagObject;
    NotNull<Object> camera;
    NotNull<InputController> inputController;
    NotNull<AnimationController> animationController;

#if SPACEJAGUARACTIONRPG_FREEFLY
    NotNull<FreeCameraControlsController> cameraController;
#else
    NotNull<AcuteAngleCameraController> cameraController;
#endif
    NotNull<GameplaySubcontroller> gameplaySubcontroller;
};
#endif
