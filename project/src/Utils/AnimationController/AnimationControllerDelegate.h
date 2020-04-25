#ifndef SPACEJAGUARACTIONRPGNATIVESTATICBUILDANIMATIONCONTROLLERDELEGATE_H_
#define SPACEJAGUARACTIONRPGNATIVESTATICBUILDANIMATIONCONTROLLERDELEGATE_H_

using namespace Shortcuts;

namespace SpaceJaguarActionRPG {

class AnimationController;

class AnimationControllerDelegate {

public:
	virtual void animationControllerDidAddObject(
		shared_ptr<AnimationController> animationController,
		NotNull<Object> object
	) = 0;

	virtual void animationControllerDidUpdateObject(
		shared_ptr<AnimationController> animationController,
		NotNull<Object> object
	) = 0;
};
};

#endif