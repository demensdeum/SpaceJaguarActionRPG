#include "SceneController.h"
#include <iostream>
#include <Utils/CubeBuilder/CubeBuilder.h>
#include <Utils/MapBuilder/MapBuilder.h>
#include <FlameSteelEngineGameToolkit/Utils/Factory.h>

using namespace std; 
using namespace FlameSteelEngine::GameToolkit::Utils;

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
 	auto cursorCube = toNotNull(make<MapBuilder>()->makeCube(3, 0, 0));
	objectsContext->addObject(cursorCube.sharedPointer());
	freeCameraControlsController = make<FreeCameraControlsController>(camera, toNotNull(ioSystem->inputController), shared_from_this());
}

 void SceneController::step() {
	if (isInitialized == false) {
		initialize();
	}
	renderer->render(gameData);     
	freeCameraControlsController->step();
	inputController->pollKey();
 }

void SceneController::freeCameraControlsControllerDidFinish(shared_ptr<FreeCameraControlsController> ) {
    objectsContext->updateObject(camera.sharedPointer());
};