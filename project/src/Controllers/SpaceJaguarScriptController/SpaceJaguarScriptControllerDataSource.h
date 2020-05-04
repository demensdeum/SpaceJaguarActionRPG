#ifndef SPACEJAGUARACTIONRPGLINUXSPACEJAGUARSCRIPTCONTROLLERDATASOURCE_H_
#define SPACEJAGUARACTIONRPGLINUXSPACEJAGUARSCRIPTCONTROLLERDATASOURCE_H_

#include <FlameSteelCore/Object.h>

using namespace FlameSteelCore;

namespace SpaceJaguarActionRPG {

class SpaceJaguarScriptController;

class SpaceJaguarScriptControllerDataSource {

public:
    virtual shared_ptr<Object> spaceJaguarScriptControllerDidRequestObjectWithName(shared_ptr<SpaceJaguarScriptController> spaceJaguarController, string  objectName) = 0;
    virtual bool spaceJaguarScriptControllerAskingIsKeyPressed(shared_ptr<SpaceJaguarScriptController> spaceJaguarController, string  key) = 0;

};
};

#endif