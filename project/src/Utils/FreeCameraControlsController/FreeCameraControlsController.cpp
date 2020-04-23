#include "FreeCameraControlsController.h"
#include <iostream>
#include <glm/gtc/matrix_transform.hpp>
#include <FlameSteelEngineGameToolkit/Utils/FSEGTUtils.h>
#include <Utils/CameraController/CameraControllerDelegate.h>

using namespace FlameSteelEngine::GameToolkit::Utils;

FreeCameraControlsController::FreeCameraControlsController(NotNull<Object> camera, NotNull<InputController> inputController, shared_ptr<CameraControllerDelegate> delegate) {
    this->camera = camera;
    this->inputController = inputController;
    this->delegate = delegate;
};

void FreeCameraControlsController::printout() {
	auto rotationVector = FSEGTUtils::getObjectRotation(camera.sharedPointer());
	auto positionVector = FSEGTUtils::getObjectPosition(camera.sharedPointer());
	cout << "Position: ";
	cout << positionVector->x << ";" << positionVector->y << ";" << positionVector->z << endl;
	cout << "Rotation: ";
	cout << rotationVector->x << ";" << rotationVector->y << ";" << rotationVector->z << endl;
}

void FreeCameraControlsController::step() {
    if (inputController->isUpKeyPressed() == true) {
        translateByRotation(0,0,0.1);
    }
    if (inputController->isDownKeyPressed() == true) {
        translateByRotation(0,0,-0.1);
    }
    if (inputController->isLeftKeyPressed() == true) {
        translateByRotation(-0.1,0,0);
    }
    if (inputController->isRightKeyPressed() == true) {
        translateByRotation(0.1,0,0);
    }
    if (inputController->isJumpKeyPressed() == true) {
        translateByRotation(0,0.1,0);
    }
    if (inputController->isCrouchKeyPressed() == true) {
        translateByRotation(0,-0.1,0);
    }
    if (inputController->isExitKeyPressed() == true) {
        exit(10);
    }

    if (inputController->touches->size() > 0) {
        auto rawTouch = inputController->touches->objectAtIndex(0);
        auto nowTouch = static_pointer_cast<FSEGTTouch>(rawTouch);
        cout << "nowTouch:" << endl;
        cout << nowTouch->x << endl;
        cout << nowTouch->y << endl;

        if (touch.get() == nullptr) {
            touch = nowTouch->copy();
            touchCameraX = cameraX;
            touchCameraY = cameraY;
        }
        else {
            if (touch->x < 512) {
                cout << "movement touch" << endl;

                auto diffX = touch->x - nowTouch->x;
                auto diffY = touch->y - nowTouch->y;

                if (diffX < 10) {
                    translateByRotation(0.1,0,0);
                }
                if (diffX > -10) {
                    translateByRotation(-0.1,0,0);
                }
                if (diffY < -10) {
                    translateByRotation(0,0,-0.1);
                }
                if (diffY > 10) {
                    translateByRotation(0,0,0.1);
                }

            }
            else {
                cout << "lookup touch" << endl;

                auto diffX = touch->x - nowTouch->x;
                auto diffY = touch->y - nowTouch->y;

                cameraX = touchCameraX + diffX;
                cameraY = touchCameraY - diffY;

                cout << "diffX: " << diffX << endl;
                cout << "diffY: " << diffY << endl;

            }
        }
    }
    else {
        touch = shared_ptr<FSEGTTouch>();
        touchCameraX = 0;
        touchCameraY = 0;
    }

    translateByRotation(0,0,0);
    rotateByPointerIfNeeded();

};

void FreeCameraControlsController::rotateByPointerIfNeeded() {
    auto object = camera.sharedPointer();
    //if (inputController->pointerXdiff != 0 || inputController->pointerYdiff != 0)
    {
        cameraX  -= float(inputController->pointerXdiff);
        cameraY += float(inputController->pointerYdiff);

        if (cameraY > 89) {
            cameraY = 89;
        }
        else if (cameraY < -89) {
            cameraY = -89;
        }

        auto cameraPositionVector = FSEGTUtils::getObjectPosition(object);

        auto rotationVector = FSEGTUtils::getObjectRotation(object);
        rotationVector->x = cameraX;
        rotationVector->y = cameraY;

        auto lockedDelegate = delegate.lock();
        if (lockedDelegate.get() != nullptr) {
            lockedDelegate->cameraControllerDidFinish(shared_from_this());
        }
    }
}

void FreeCameraControlsController::translateByRotation(float x, float y, float z) {
    auto object = camera.sharedPointer();
    auto cameraPositionVector = FSEGTUtils::getObjectPosition(object);
    auto rotationVector = FSEGTUtils::getObjectRotation(object);

    auto yaw = glm::radians(-90.f - rotationVector->x);
    auto pitch = glm::radians(0 - rotationVector->y);

    glm::vec3 front;
    front.x = cos(pitch) * cos(yaw);
    front.y = sin(pitch);
    front.z = cos(pitch) * sin(yaw);

    glm::vec3 cameraUp    = glm::vec3(0.0f, 1.0f,  0.0f);
    glm::vec3 right = glm::normalize(glm::cross(front, cameraUp));

    auto cameraFront = glm::normalize(front);
    auto targetPosition = cameraPositionVector->vec3() + glm::vec3(cameraFront * z) + right * x;
    targetPosition.y += y;

    //cout << targetPosition.x << " ; " << targetPosition.y << " ; "<< targetPosition.z << endl;

    cameraPositionVector->x = targetPosition.x;
    cameraPositionVector->y = targetPosition.y;
    cameraPositionVector->z = targetPosition.z;

    auto lockedDelegate = delegate.lock();
    if (lockedDelegate.get() != nullptr) {
        lockedDelegate->cameraControllerDidFinish(shared_from_this());
    }

}
