#include "SceneController.h"
#include <iostream>
#include <Utils/CubeBuilder/CubeBuilder.h>
#include <Utils/MapBuilder/MapBuilder.h>
#include <FlameSteelEngineGameToolkit/Utils/Factory.h>
#include <Utils/GameplayObjectsFactory/GameplayObjectsFactory.h>
#include <FlameSteelEngineGameToolkit/Utils/FSEGTUtils.h>
#include <FlameSteelCore/Utils.h>

using namespace std;
using namespace FlameSteelCore::Utils;
using namespace FlameSteelEngine::GameToolkit::Utils;

void SceneController::initialize() {
    isInitialized = true;
    gameplaySubcontroller = make<GameplaySubcontroller>();
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
    auto mapObject= toNotNull(make<MapBuilder>()->makeMap(0, 0, 0));
    objectsContext->addObject(mapObject.sharedPointer());
	cout << "Make Jaguar" << endl;
    jagObject = GameplayObjectsFactory::makeJag(inputController, shared_from_this());
    objectsContext->addObject(jagObject.sharedPointer());
    gameplaySubcontroller->addObject(jagObject);
	cout << "Make camera" << endl;
#if SPACEJAGUARACTIONRPG_FREEFLY
    cameraController = make<FreeCameraControlsController>(camera, toNotNull(ioSystem->inputController), shared_from_this());
#else
    cameraController = make<AcuteAngleCameraController>(camera, jagObject, shared_from_this());
#endif
	cout << "Make animations" << endl;
    animationController = make<AnimationController>(jagObject, shared_from_this());
    animationController->initialize();

	scriptController = make<SpaceJaguarScriptController>();
	scriptController->setScript("console.log(\"test\")");
}

void SceneController::step() {
    if (isInitialized == false) {
        initialize();
    }

    //FSEGTUtils::setObjectIsVisible(jagObject.sharedPointer(), RandomBool());

    inputController->pollKey();
    gameplaySubcontroller->step();
    animationController->step();
    cameraController->step();
	scriptController->step();
    renderer->render(gameData);

    if (inputController->isExitKeyPressed() == true) {
        exit(10);
    }

#if SPACEJAGUARACTIONRPG_FREEFLY
    cameraController->printout();
#endif

}

void SceneController::cameraControllerDidFinish(shared_ptr<CameraController> ) {
    //cout << "camera controller did finish" << endl;
    objectsContext->updateObject(camera.sharedPointer());
};

void SceneController::playerOwnerObjectControlsDidFinish(shared_ptr<PlayerOwnerObjectControls> ) {
    objectsContext->updateObject(jagObject.sharedPointer());
}

void SceneController::animationControllerDidAddObject(shared_ptr<AnimationController>, NotNull<Object> object) {
    objectsContext->addObject(object.sharedPointer());
}

void SceneController::animationControllerDidUpdateObject(shared_ptr<AnimationController>, NotNull<Object> object) {
    objectsContext->updateObject(object.sharedPointer());
}