#ifndef CUBEARTPROJECTFREECAMERACONTROLSCONTROLLERDELEGATE_H_
#define CUBEARTPROJECTFREECAMERACONTROLSCONTROLLERDELEGATE_H_\

#include <memory>

using namespace std;

namespace  FlameSteelEngine {
namespace GameToolkit {
namespace Utils {

class FreeCameraControlsController;

class FreeCameraControlsControllerDelegate {
public:
    virtual void freeCameraControlsControllerDidFinish(shared_ptr<FreeCameraControlsController> freeCameraControlsController) = 0;
};
};
};
};

#endif