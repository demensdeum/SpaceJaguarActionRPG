#ifndef SPACEJAGUARACTIONRPGNATIVESTATICBUILDGAMEPLAYCONTROLLER_H_
#define SPACEJAGUARACTIONRPGNATIVESTATICBUILDGAMEPLAYCONTROLLER_H_

#include <FlameSteelCore/Object.h>
#include <FlameSteelCore/Objects.h>
#include <FlameSteelCore/SharedNotNullPointer.h>

using namespace Shortcuts;

namespace SpaceJaguarActionRPG {

class GameplaySubcontroller {

public:
    void addObject(NotNull<Object> object);
    void removeAll();

    void step();

private:
    NotNull<Objects> objects = make<Objects>();

};

};

#endif