#ifndef SPACEJAGUARACTIONRPGNATIVESTATICBUILDACUTEANGLECAMERACONTROLLER_H_
#define SPACEJAGUARACTIONRPGNATIVESTATICBUILDACUTEANGLECAMERACONTROLLER_H_

#include <Utils/CameraController/CameraController.h>

using namespace FlameSteelEngine::GameToolkit::Utils; 

namespace FlameSteelEngine {
namespace GameToolkit {
namespace Utils {

class AcuteAngleCameraController: public CameraController, public enable_shared_from_this<AcuteAngleCameraController> {

public:
	AcuteAngleCameraController(NotNull<Object> camera, NotNull<Object> target, weak_ptr<CameraControllerDelegate> delegate);
	void step();

private:
	NotNull<Object> target;

};

};
};
};

#endif