#ifndef FLAMESTEELENGINEPROJECTMAINCONTROLLER_H_
#define FLAMESTEELENGINEPROJECTMAINCONTROLLER_H_

#include "State.h"
#include <FlameSteelEngineGameToolkitFSGL/IO/IOSystem.h>
#include <FlameSteelEngineGameToolkitFSGL/IO/Window/Window.h>
#include <FlameSteelEngineGameToolkit/Controllers/MainGameController.h>
#include <Controllers/SceneController/SceneController.h>

using namespace FlameSteelProject::MainControllerState;

namespace FlameSteelEngineProject {
class MainController {

public:
    void start();
    void switchToSceneController();
    void startGameLoop();

private:
    shared_ptr<IOSystem> ioSystem;
    shared_ptr<Window> window;
    State state  =  started;

    shared_ptr<FlameSteelEngine::GameToolkit::MainGameController> mainGameController;
    shared_ptr<SceneController> sceneController;
};
}
#endif
