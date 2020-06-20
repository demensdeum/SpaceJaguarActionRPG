#include <iostream>
#include <Controllers/MainController/MainController.h>
#include <FlameSteelCommonTraits/IOSystemParams.h>

using namespace std;
using namespace FlameSteelEngineProject;

int main(int argc, char *argv[]) {

	shared_ptr<string> startScriptPath;
	if (argc >1) {
		startScriptPath = make_shared<string>(argv[1]);
	}

	auto params = make<IOSystemParams>();
	params->oldSchoolVibeEnabled = true;

    auto controller = make_shared<MainController>(startScriptPath, params);
    controller->start();
    controller->switchToSceneController();
    controller->startGameLoop();

    cout << argc << ";" << argv;

    return 0;
}
