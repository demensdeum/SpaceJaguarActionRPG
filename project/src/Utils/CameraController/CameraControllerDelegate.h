#ifndef SPACEJAGUARACTIONRPGNATIVESTATICBUILDCAMERACONTROLLERDELEGATE_H_
#define SPACEJAGUARACTIONRPGNATIVESTATICBUILDCAMERACONTROLLERDELEGATE_H_

#include <memory>

using namespace std;

namespace FlameSteelEngine {
namespace GameToolkit {
namespace Utils {

class CameraController;

class CameraControllerDelegate {

public:
	virtual void cameraControllerDidFinish(shared_ptr<CameraController> cameraController) = 0;
};

};
};
};

#endif