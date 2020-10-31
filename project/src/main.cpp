#include <iostream>
#include <memory>
#include <Controllers/MainController/MainController.h>
#include <FSGL/Data/SystemParams.h>

using namespace std;
using namespace FlameSteelEngine::GameToolkit;
using namespace FlameSteelEngineProject;
using namespace FSGL;

int main(int argc, char *argv[]) {

	shared_ptr<string> startScriptPath;
	if (argc >1) {
		startScriptPath = make_shared<string>(argv[1]);
	}

	auto params = make_shared<SystemParams>();
	params->oldSchoolVibeEnabled = false;
	params->raiseExecutionWhenModelLoadingTooLong = true;

	auto castedParams = static_pointer_cast<IOSystemParams>(params);

    auto controller = make_shared<MainController>(startScriptPath, castedParams);
    controller->start();
    controller->switchToSceneController();
    controller->startGameLoop();

    cout << argc << ";" << argv;

    return 0;
}
