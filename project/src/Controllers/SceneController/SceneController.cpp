#include "SceneController.h"
#include <iostream>
#include <Utils/CubeBuilder/CubeBuilder.h>
#include <Utils/MapBuilder/MapBuilder.h>
#include <FlameSteelEngineGameToolkit/Utils/Factory.h>

using namespace std; 
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
 	auto mapObject= toNotNull(make<MapBuilder>()->makeMap(0, 0, 0));
	objectsContext->addObject(mapObject.sharedPointer());
	auto jagObject = toNotNull(make<CubeBuilder>()->makeCube(0, 0, 0));
	objectsContext->addObject(jagObject.sharedPointer());
	gameplaySubcontroller->addObject(jagObject);
	freeCameraControlsController = make<FreeCameraControlsController>(camera, toNotNull(ioSystem->inputController), shared_from_this());
}

 void SceneController::step() {
	if (isInitialized == false) {
		initialize();
	}
	freeCameraControlsController->step();
	inputController->pollKey();
	gameplaySubcontroller->step();
	renderer->render(gameData);
 }

void SceneController::freeCameraControlsControllerDidFinish(shared_ptr<FreeCameraControlsController> ) {
    objectsContext->updateObject(camera.sharedPointer());
};