#ifndef SPACEJAGUARACTIONRPGNATIVESTATICBUILDGAMEPLEYOBJECTSFACTORY_H_
#define SPACEJAGUARACTIONRPGNATIVESTATICBUILDGAMEPLEYOBJECTSFACTORY_H_

#include <FlameSteelCore/Object.h>
#include <FlameSteelCore/SharedNotNullPointer.h>

using namespace Shortcuts;
using namespace FlameSteelCore;

namespace SpaceJaguarActionRPG {

class GameplayObjectsFactory {

public:
	static NotNull<Object> makeJag();

};

};

#endif