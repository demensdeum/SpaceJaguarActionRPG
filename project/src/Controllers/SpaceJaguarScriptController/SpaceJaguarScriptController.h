#ifndef SPACEJAGUARACTIONRPGLINUXSPACEJAGUARSCRIPTCONTROLLER_H_
#define SPACEJAGUARACTIONRPGLINUXSPACEJAGUARSCRIPTCONTROLLER_H_

#include <memory>
#include "tiny-js/TinyJS.h"
#include <FlameSteelCore/SharedNotNullPointer.h>
#include <FlameSteelEngineGameToolkit/Controllers/ScriptController.h>
#include "SpaceJaguarScriptControllerDataSource.h"
#include "SpaceJaguarScriptControllerDelegate.h"
#include "SpaceJaguarScriptControllerCallContainer.h"

using namespace std;
using namespace Shortcuts;
using namespace FlameSteelEngine::GameToolkit;

namespace SpaceJaguarActionRPG {

class SpaceJaguarScriptController: public ScriptController, public enable_shared_from_this<SpaceJaguarScriptController> {

public:
	void setScriptFromFilePath(string path);
	void step();
	weak_ptr<SpaceJaguarScriptControllerDataSource> dataSource;
	weak_ptr<SpaceJaguarScriptControllerDelegate> delegate;

private:
	NotNull<SpaceJaguarScriptControllerCallContainer> callContainer = make<SpaceJaguarScriptControllerCallContainer>();
	NotNull<CTinyJS> tinyJS = make<CTinyJS>();

	void initialize();
	bool isInitialized = false;

};
};


#endif