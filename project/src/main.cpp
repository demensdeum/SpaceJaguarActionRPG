#include <iostream>
#include <Controllers/MainController/MainController.h>

using namespace std;
using namespace FlameSteelEngineProject;

int main(int argc, char *argv[]) {

    auto controller = make_shared<MainController>();
    controller->start();
    controller->switchToSceneController();
    controller->startGameLoop();

    cout << argc << ";" << argv;

    return 0;
}
