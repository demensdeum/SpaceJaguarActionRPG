#include "AnimationController.h"
#include <iostream>
#include <FlameSteelEngineGameToolkit/Utils/FSEGTUtils.h>
#include <FlameSteelEngineGameToolkit/Data/Components/FSEGTFactory.h>

using namespace SpaceJaguarActionRPG;

AnimationController::AnimationController(NotNull<Object> target, weak_ptr<AnimationControllerDelegate> delegate) {
    this->target = target;
    this->delegate = delegate;
};

void AnimationController::initialize() {

    std::array frames = {
        "com.demensdeum.deathmaskgame.combatdrone.runAnimationFrame1.fsglmodel",
        "com.demensdeum.deathmaskgame.combatdrone.runAnimationFrame2.fsglmodel",
        "com.demensdeum.deathmaskgame.combatdrone.runAnimationFrame3.fsglmodel",
        "com.demensdeum.deathmaskgame.combatdrone.runAnimationFrame4.fsglmodel",
        "com.demensdeum.deathmaskgame.combatdrone.runAnimationFrame5.fsglmodel",
        "com.demensdeum.deathmaskgame.combatdrone.runAnimationFrame4.fsglmodel",
        "com.demensdeum.deathmaskgame.combatdrone.runAnimationFrame3.fsglmodel",
        "com.demensdeum.deathmaskgame.combatdrone.runAnimationFrame2.fsglmodel",
    };

    maxFrames = frames.size();

    for (auto frame : frames) {

        auto frameObject = FSEGTFactory::makeOnSceneObject(
                               make_shared<string>("dummy"),
                               make_shared<string>("dummy"),
                               shared_ptr<string>(),
                               make_shared<string>(frame),
                               shared_ptr<string>(),
                               0, 0, 0,
                               1, 1, 1,
                               0, 0, 0,
                               0);

        frameObjects->addObject(frameObject);

        auto lockedDelegate = delegate.lock();
        if (lockedDelegate.get() != nullptr) {
            lockedDelegate->animationControllerDidAddObject(shared_from_this(), frameObject);
        }

    }
};

void AnimationController::step() {
    auto position = FSEGTUtils::getObjectPosition(target.sharedPointer());
    auto rotation = FSEGTUtils::getObjectRotation(target.sharedPointer());

    FSEGTUtils::setObjectIsVisible(target.sharedPointer(), false);
    auto lockedDelegate = delegate.lock();
    if (lockedDelegate.get() != nullptr) {
        lockedDelegate->animationControllerDidUpdateObject(shared_from_this(), target);
    }

    for (auto i = 0; i < frameObjects->size(); i++) {
        auto frameObject = frameObjects->objectAtIndex(i);

        FSEGTUtils::getObjectPosition(frameObject)->populate(position);
        FSEGTUtils::getObjectRotation(frameObject)->populate(rotation);

        auto isVisible = i == currentFrame;
        FSEGTUtils::setObjectIsVisible(frameObject, isVisible);

        //cout << i << ";" << currentFrame << ";" << isVisible << endl;

        auto lockedDelegate = delegate.lock();
        if (lockedDelegate.get() != nullptr) {
            lockedDelegate->animationControllerDidUpdateObject(shared_from_this(), frameObject);
        }
    }

    tick += 1;

    if (tick > 10) {
        currentFrame += 1;
        tick = 0;
    }

    if (currentFrame > maxFrames - 1) {
        currentFrame = 0;
    }
}
