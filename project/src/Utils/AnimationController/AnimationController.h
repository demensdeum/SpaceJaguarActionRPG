#ifndef SPACEJAGUARACTIONRPGNATIVESTATICBUILDANIMATIONCONTROLLER_H_
#define SPACEJAGUARACTIONRPGNATIVESTATICBUILDANIMATIONCONTROLLER_H_

#include <array>
#include <FlameSteelCore/Objects.h>
#include <FlameSteelCore/SharedNotNullPointer.h>
#include "AnimationControllerDelegate.h"

using namespace Shortcuts;

namespace SpaceJaguarActionRPG {

class AnimationController: public enable_shared_from_this<AnimationController> {

public:
    AnimationController(NotNull<Object> target, weak_ptr<AnimationControllerDelegate> delegate);
    void initialize();
    void step();

private:
    weak_ptr<AnimationControllerDelegate> delegate;
    NotNull<Object> target;
    NotNull<Objects> frameObjects = make<Objects>();
    int currentFrame = 0;
    int maxFrames = 4;
    int tick = 0;

};

};

#endif