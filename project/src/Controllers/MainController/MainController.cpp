#include "MainController.h"
#include <iostream>

using namespace FlameSteelEngineProject;

MainController::MainController(shared_ptr<string> startScriptPath, NotNull<IOSystemParams> params) {
	this->startScriptPath = startScriptPath;
	this->params = params;
};

void MainController::start() {
    cout << "MainController::start()" << endl;

    mainGameController = make_shared<FlameSteelEngine::GameToolkit::MainGameController>();
	string mainScript = "com.demensdeum.flamesteelengine.application.main.js";

	if (startScriptPath.get()) {
		mainScript = *startScriptPath.get();
	}

	sceneController = make_shared<SceneController>(mainScript);

    mainGameController->setControllerForState(sceneController, scene);

    ioSystem = make_shared<IOSystem>();
    ioSystem->initialize(params);
    window = ioSystem->getWindow();

    mainGameController->setIOSystem(ioSystem->getFSGLIOSystem());

};

void MainController::switchToSceneController() {
    if (state == scene) {
        return;
    }
    state = scene;
    mainGameController->initializeGameFromState(scene);
}

void MainController::startGameLoop() {
    mainGameController->startGameLoop();
}
