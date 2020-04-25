#include "PlayerOwnerObjectControls.h"
#include <FlameSteelEngineGameToolkit/Utils/FSEGTUtils.h>

using namespace SpaceJaguarActionRPG;

static float RADIANQ = 0.0174533;

void PlayerOwnerObjectControls::step() {
    auto position = FSEGTUtils::getObjectPosition(puppet.sharedPointer());
    auto rotation = FSEGTUtils::getObjectRotation(puppet.sharedPointer());

    if (inputController->isUpKeyPressed() == true) {
        position->z -= 0.1;
        rotation->y = 180 * RADIANQ;
    }
    if (inputController->isDownKeyPressed() == true) {
        position->z += 0.1;
        rotation->y = 0 * RADIANQ;
    }
    if (inputController->isLeftKeyPressed() == true) {
        position->x -= 0.1;
        rotation->y = 270 * RADIANQ;
    }
    if (inputController->isRightKeyPressed() == true) {
        position->x += 0.1;
        rotation->y = 90 * RADIANQ;
    }

    auto lockedDelegate = delegate.lock();
    if (lockedDelegate.get() != nullptr) {
        lockedDelegate->playerOwnerObjectControlsDidFinish(shared_from_this());
    }
}

void PlayerOwnerObjectControls::setPuppetAndInputControllerAndDelegate(NotNull<Object> puppet, NotNull<InputController> inputController, weak_ptr<PlayerOwnerObjectControlsDelegate> delegate) {
    this->puppet = puppet;
    this->inputController = inputController;
    this->delegate = delegate;
};
