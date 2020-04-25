#include "MainController.h"
#include <iostream>

using namespace FlameSteelEngineProject;


void MainController::start() {
    cout << "MainController::start()" << endl;

    mainGameController = make_shared<FlameSteelEngine::GameToolkit::MainGameController>();
    sceneController = make_shared<SceneController>();

    mainGameController->setControllerForState(sceneController, scene);

    ioSystem = make_shared<IOSystem>();
    ioSystem->initialize();
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
