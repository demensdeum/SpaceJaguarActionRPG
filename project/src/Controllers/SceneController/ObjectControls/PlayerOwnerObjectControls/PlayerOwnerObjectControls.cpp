#include "PlayerOwnerObjectControls.h"
#include <FlameSteelEngineGameToolkit/Utils/FSEGTUtils.h>

using namespace SpaceJaguarActionRPG;

void PlayerOwnerObjectControls::step() {
	auto position = FSEGTUtils::getObjectPosition(puppet.sharedPointer());

    if (inputController->isUpKeyPressed() == true) {
        position->z -= 1;
    }
    if (inputController->isDownKeyPressed() == true) {
        position->z += 1;
    }
    if (inputController->isLeftKeyPressed() == true) {
        position->x -= 1;
    }
    if (inputController->isRightKeyPressed() == true) {
        position->x += 1;
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
