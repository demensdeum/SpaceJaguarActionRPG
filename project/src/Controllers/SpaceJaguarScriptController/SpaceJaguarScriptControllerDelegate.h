#ifndef SPACEJAGUARACTIONRPGLINUXSPACEJAGUARSCRIPTCONTROLLERDELEGATE_H_
#define SPACEJAGUARACTIONRPGLINUXSPACEJAGUARSCRIPTCONTROLLERDELEGATE_H_

using namespace FlameSteelCore;

namespace SpaceJaguarActionRPG {

class SpaceJaguarScriptController;

class SpaceJaguarScriptControllerDelegate {

public:
	virtual void spaceJaguarScriptControllerDidRequestPlayAnimationForObjectWithName(shared_ptr<SpaceJaguarScriptController> spaceJaguarController, string animationName, string objectName) = 0;
    virtual void spaceJaguarScriptControllerDidRequestAddObjectWithPath(shared_ptr<SpaceJaguarScriptController> spaceJaguarController, string name, string  modelPath, float x, float y, float z) = 0;
    virtual void spaceJaguarScriptControllerDidRequestUpdateObjectWithNameAndPositionXYZ(shared_ptr<SpaceJaguarScriptController> spaceJaguarController, string name, float x, float y, float z) = 0;
    virtual void spaceJaguarScriptControllerDidRequestChangeNoclipMode(shared_ptr<SpaceJaguarScriptController> spaceJaguarController, bool noclipMode) = 0;
	virtual void spaceJaguarScriptControllerDidRequestSetWindowTitle(shared_ptr<SpaceJaguarScriptController> spaceJaguarController, string title) = 0;
};
};

#endif