#ifndef FLAMESTEELENGINEPROJECTSCENECONTROLLER_H_
#define FLAMESTEELENGINEPROJECTSCENECONTROLLER_H_

#include <FlameSteelEngineGameToolkit/Controllers/GameController.h>

class SceneController: public GameController, public enable_shared_from_this<SceneController> {
  
    void step();
    
};
#endif
