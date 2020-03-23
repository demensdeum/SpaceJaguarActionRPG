#include "GameplayObjectsFactory.h"
#include <Utils/CubeBuilder/CubeBuilder.h>

using namespace SpaceJaguarActionRPG;
using namespace FlameSteelEngine::GameToolkit::Utils;

NotNull<Object> GameplayObjectsFactory::makeJag() {

	auto jag = make_shared<CubeBuilder>()->makeCube(0, 0, 0);
	return jag;
};
