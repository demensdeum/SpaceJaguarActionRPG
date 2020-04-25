#include "AcuteAngleCameraController.h"
#include <iostream>
#include <FlameSteelEngineGameToolkit/Utils/FSEGTUtils.h>

using namespace std;

AcuteAngleCameraController::AcuteAngleCameraController(NotNull<Object> camera, NotNull<Object> target, weak_ptr<CameraControllerDelegate> delegate) {
    this->camera = camera;
    this->target = target;
    this->delegate = delegate;
};

void AcuteAngleCameraController::step() {

    auto cameraPosition = FSEGTUtils::getObjectPosition(camera.sharedPointer());
    auto cameraRotation = FSEGTUtils::getObjectRotation(camera.sharedPointer());

    auto targetPosition = FSEGTUtils::getObjectPosition(target.sharedPointer());
    auto targetRotation = FSEGTUtils::getObjectRotation(target.sharedPointer());

    cameraRotation->x = -21;
    cameraRotation->y = 45;
    cameraRotation->z = 0;

    cameraPosition->x = targetPosition->x - 1.24344;
    cameraPosition->y = 2.56537;
    cameraPosition->z = targetPosition->z + 2.53677;

    auto lockedDelegate = delegate.lock();
    if (lockedDelegate.get() != nullptr) {
        lockedDelegate->cameraControllerDidFinish(shared_from_this());
    }
};
