#ifndef SPACEJAGUARACTIONRPGLINUXSPACEJAGUARSCRIPTCONTROLLER_H_
#define SPACEJAGUARACTIONRPGLINUXSPACEJAGUARSCRIPTCONTROLLER_H_

#include "tiny-js/TinyJS.h"
#include <FlameSteelCore/SharedNotNullPointer.h>
#include <FlameSteelEngineGameToolkit/Controllers/ScriptController.h>

using namespace Shortcuts;
using namespace FlameSteelEngine::GameToolkit;


namespace SpaceJaguarActionRPG {

class SpaceJaguarScriptController: public ScriptController {

public:
	void step();

private:
	NotNull<CTinyJS> tinyJS = make<CTinyJS>();

	void initialize();
	bool isInitialized = false;

};
};


#endif