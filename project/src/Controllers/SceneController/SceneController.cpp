#include "SceneController.h"
#include <iostream>
#include <Utils/CubeBuilder/CubeBuilder.h>
#include <Utils/MapBuilder/MapBuilder.h>
#include <FlameSteelEngineGameToolkit/Utils/Factory.h>
#include <FlameSteelEngineGameToolkit/Utils/FSEGTUtils.h>
#include <FlameSteelCore/Utils.h>
#include <FlameSteelEngineGameToolkit/Data/Components/FSEGTFactory.h>
#include <FSGL/Data/Matrix/FSGLMatrix.h>
#include <unistd.h>

using namespace std;
using namespace FlameSteelCore::Utils;
using namespace FlameSteelEngine::GameToolkit::Utils;

SceneController::SceneController(string startScriptPath) {
	this->startScriptPath = startScriptPath;
};

void SceneController::initialize() {
    isInitialized = true;
    inputController = toNotNull(ioSystem->inputController);

	cleanAndRestartScriptEngine();
}

void SceneController::step() {

    if (isInitialized == false) {
        initialize();
    }
    inputController->pollKey();
    scriptController->step();

    if (noclipMode) {
	noclipCameraController->step();
	noclipCameraController->printout();
	if (inputController->useKeyPressed) {
		cout << "Use key pressed" << endl;
		cleanAndRestartScriptEngine();
	}
    }

    renderer->render(gameData);

    if (inputController->isExitKeyPressed() == true) {
        exit(10);
    }
}

void SceneController::cleanAndRestartScriptEngine() {
	objectsContext->removeAllObjects();
    scriptController = make<SpaceJaguarScriptController>();
    scriptController->dataSource = shared_from_this();
    scriptController->delegate = shared_from_this();
    scriptController->setScriptFromFilePath(startScriptPath);	
	scriptController->step();

		camera = objectsContext->objectWithInstanceIdentifier(make_shared<string>("camera"));
		if (camera.get() == nullptr) {
			throwRuntimeException("Camera is null, so can't use GRANNYPILLS mode, crashing");
		}
		noclipCameraController = make_shared<FreeCameraControlsController>(camera, toNotNull(ioSystem->inputController), shared_from_this());

}

void SceneController::spaceJaguarScriptControllerDidRequestRemoveAllObjects(shared_ptr<SpaceJaguarScriptController> ) {
	objectsContext->removeAllObjects();
}

void SceneController::cameraControllerDidFinish(shared_ptr<CameraController> ) {
    //cout << "camera controller did finish" << endl;
    objectsContext->updateObject(camera.sharedPointer());
};

shared_ptr<Object> SceneController::spaceJaguarScriptControllerDidRequestObjectWithName(shared_ptr<SpaceJaguarScriptController>, string  objectName) {
    return objectsContext->objectWithInstanceIdentifier(make_shared<string>(objectName));
}

void SceneController::spaceJaguarScriptControllerDidRequestAddObjectWithPath(shared_ptr<SpaceJaguarScriptController>, string name, string  modelPath, float x, float y, float z, float rX, float rY, float rZ) {

	shared_ptr<string> modelPathSharedPtr;
	if (modelPath != "undefined") {
		modelPathSharedPtr = make_shared<string>(modelPath);
	}

    auto object = FSEGTFactory::makeOnSceneObject(
                      make_shared<string>(name),
                      make_shared<string>(name),
                      shared_ptr<string>(),
                      modelPathSharedPtr,
                      shared_ptr<string>(),
                      x, y, z,
                      1, 1, 1,
                      rX, rY, rZ,
                      0);

    cout << "SceneController addObject with name: " << name << endl;

    objectsContext->addObject(object);
}

void SceneController::spaceJaguarScriptControllerDidRequestSetWindowTitle(shared_ptr<SpaceJaguarScriptController> , string title) {
	ioSystem->setWindowTitle(title);
};

void SceneController::spaceJaguarScriptControllerDidRequestUpdateObjectWithNameAndPositionXYZ(shared_ptr<SpaceJaguarScriptController>, string name, float x, float y, float z) {
    auto object = objectsContext->objectWithInstanceIdentifier(make_shared<string>(name));
    if (object.get() == nullptr) {
        auto errorString = string("SceneController update object error, no object with name: ");
        errorString += name;
        throwRuntimeException(errorString);
    }
    auto position = FSEGTUtils::getObjectPosition(object);
    position->x = x;
    position->y = y;
    position->z = z;
    objectsContext->updateObject(object);
};

void SceneController::spaceJaguarScriptControllerDidRequestChangeNoclipMode(shared_ptr<SpaceJaguarScriptController>, bool noclipMode) {
    this->noclipMode = noclipMode;
}

bool SceneController::spaceJaguarScriptControllerAskingIsKeyPressed(shared_ptr<SpaceJaguarScriptController> , string  key) {
	if (key == "leftKey") {
		return inputController->isLeftKeyPressed();
	}
	else if (key == "rightKey") {
		return inputController->isRightKeyPressed();
	}
	else if (key == "upKey") {
		return inputController->isUpKeyPressed();
	}
	else if (key == "downKey") {
		return inputController->isDownKeyPressed();
	}
	return false;
}

void SceneController::spaceJaguarScriptControllerDidRequestPlayAnimationForObjectWithName(
	shared_ptr<SpaceJaguarScriptController> , 
	string animationName, 
	string objectName
) 
{
	cout << "requested animation play: \"" << animationName << "\" for object with name: \"" << objectName << "\"" << endl;
    auto object = objectsContext->objectWithInstanceIdentifier(make_shared<string>(objectName));
    if (object.get() == nullptr) {
        auto errorString = string("SceneController play animation error, no object with name: ");
        errorString += objectName;
        throwRuntimeException(errorString);
    }

	FSEGTUtils::setCurrentAnimationNameForObject(animationName, object);
	objectsContext->updateObject(object);
};