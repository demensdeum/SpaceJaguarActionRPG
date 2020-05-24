#include "SceneController.h"
#include <iostream>
#include <Utils/CubeBuilder/CubeBuilder.h>
#include <Utils/MapBuilder/MapBuilder.h>
#include <FlameSteelEngineGameToolkit/Utils/Factory.h>
#include <FlameSteelEngineGameToolkit/Utils/FSEGTUtils.h>
#include <FlameSteelCore/Utils.h>
#include <FlameSteelEngineGameToolkit/Data/Components/FSEGTFactory.h>

using namespace std;
using namespace FlameSteelCore::Utils;
using namespace FlameSteelEngine::GameToolkit::Utils;

SceneController::SceneController(string startScriptPath) {
	this->startScriptPath = startScriptPath;
};

void SceneController::initialize() {
    isInitialized = true;
    inputController = toNotNull(ioSystem->inputController);
    camera = Factory::makeObject(
                 make_shared<string>("camera"),
                 make_shared<string>("camera"),
                 0,0,0,
                 1,1,1,
                 0,0,0
             );
    objectsContext->addObject(camera.sharedPointer());
    cout << "Make map" << endl;

	if (startScriptPath == "com.demensdeum.flamesteelengine.application.main.js") {
		auto mapObject= toNotNull(make<MapBuilder>()->makeMap(0, 0, 0));
		objectsContext->addObject(mapObject.sharedPointer());
	}


    cout << "Make camera" << endl;
    noclipCameraController = make<FreeCameraControlsController>(camera, toNotNull(ioSystem->inputController), shared_from_this());

    scriptController = make<SpaceJaguarScriptController>();
    scriptController->dataSource = shared_from_this();
    scriptController->delegate = shared_from_this();
    scriptController->setScriptFromFilePath(startScriptPath);
}

void SceneController::step() {
    if (isInitialized == false) {
        initialize();
    }
    inputController->pollKey();
    scriptController->step();

	if (jagObject.get() == nullptr) {
		jagObject = objectsContext->objectWithInstanceIdentifier(make_shared<string>("Jaguar"));
	    cameraController = make<AcuteAngleCameraController>(camera, jagObject, shared_from_this());
	}

    if (noclipMode) {
        noclipCameraController->step();
    }
    else {
        cameraController->step();
    }
    renderer->render(gameData);

    if (inputController->isExitKeyPressed() == true) {
        exit(10);
    }

    if (noclipPrintoutMode) {
        noclipCameraController->printout();
    }

}

void SceneController::cameraControllerDidFinish(shared_ptr<CameraController> ) {
    //cout << "camera controller did finish" << endl;
    objectsContext->updateObject(camera.sharedPointer());
};

shared_ptr<Object> SceneController::spaceJaguarScriptControllerDidRequestObjectWithName(shared_ptr<SpaceJaguarScriptController>, string  objectName) {
    return objectsContext->objectWithInstanceIdentifier(make_shared<string>(objectName));
}

void SceneController::spaceJaguarScriptControllerDidRequestAddObjectWithPath(shared_ptr<SpaceJaguarScriptController>, string name, string  modelPath, float x, float y, float z) {
    auto object = FSEGTFactory::makeOnSceneObject(
                      make_shared<string>(name),
                      make_shared<string>(name),
                      shared_ptr<string>(),
                      make_shared<string>(modelPath),
                      shared_ptr<string>(),
                      x, y, z,
                      1, 1, 1,
                      0, 0, 0,
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