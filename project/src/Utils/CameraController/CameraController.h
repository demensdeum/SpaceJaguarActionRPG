#ifndef SPACEJAGUARACTIONRPGNATIVESTATICBUILDCAMERACONTROLLER_H_
#define SPACEJAGUARACTIONRPGNATIVESTATICBUILDCAMERACONTROLLER_H_

#include <Utils/CameraController/CameraControllerDelegate.h>
#include <FlameSteelCore/SharedNotNullPointer.h>

using namespace Shortcuts;

namespace FlameSteelCore {
class Object;
};

using namespace FlameSteelCore;

namespace FlameSteelEngine {
namespace GameToolkit {
namespace Utils {

class CameraController {

public:
    virtual ~CameraController() = default;
    virtual void step() = 0;

protected:
    NotNull<Object> camera;
    weak_ptr<CameraControllerDelegate> delegate;

};

};
};
};

#endif