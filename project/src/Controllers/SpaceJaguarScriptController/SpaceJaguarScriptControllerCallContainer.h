#ifndef SPACEJAGUARACTIONRPGLINUXSPACEJAGUARSCRIPTCONTROLLERCALLCONTAINER_H_
#define SPACEJAGUARACTIONRPGLINUXSPACEJAGUARSCRIPTCONTROLLERCALLCONTAINER_H_

#include <memory>
#include "tiny-js/TinyJS.h"
#include <FlameSteelCore/SharedNotNullPointer.h>

using namespace Shortcuts;

namespace SpaceJaguarActionRPG {

struct SpaceJaguarScriptControllerCallContainer {
    shared_ptr<SpaceJaguarScriptController> spaceJaguarScriptController;
    NotNull<CTinyJS> tinyJS;
};

};

#endif