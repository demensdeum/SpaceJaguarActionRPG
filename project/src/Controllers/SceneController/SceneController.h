#ifndef FLAMESTEELENGINEPROJECTSCENECONTROLLER_H_
#define FLAMESTEELENGINEPROJECTSCENECONTROLLER_H_

#include <Controllers/SpaceJaguarScriptController/SpaceJaguarScriptController.h>
#include <FlameSteelCore/SharedNotNullPointer.h>
#include <FlameSteelEngineGameToolkit/IO/Input/InputController.h>
#include <FlameSteelEngineGameToolkit/Controllers/GameController.h>
#include <Utils/FreeCameraControlsController/FreeCameraControlsController.h>
#include <Utils/AcuteAngleCameraController/AcuteAngleCameraController.h>

using namespace Shortcuts;
using namespace SpaceJaguarActionRPG;
using namespace FlameSteelEngine::GameToolkit::Utils;

class SceneController: public GameController, public enable_shared_from_this<SceneController>, public CameraControllerDelegate, public SpaceJaguarScriptControllerDataSource, public SpaceJaguarScriptControllerDelegate {

public:
	SceneController(string startScriptPath);
    void step();
    void cameraControllerDidFinish(shared_ptr<CameraController> cameraController);
    shared_ptr<Object> spaceJaguarScriptControllerDidRequestObjectWithName(shared_ptr<SpaceJaguarScriptController> spaceJaguarController, string  objectName);
    void spaceJaguarScriptControllerDidRequestAddObjectWithPath(shared_ptr<SpaceJaguarScriptController> spaceJaguarController, string name, string  modelPath, float x, float y, float z, float rX, float rY, float rZ);
    void spaceJaguarScriptControllerDidRequestUpdateObjectWithNameAndPositionXYZrXrYrZ(shared_ptr<SpaceJaguarScriptController>, string name, float x, float y, float z, float rX, float rY, float rZ);
    void spaceJaguarScriptControllerDidRequestChangeNoclipMode(shared_ptr<SpaceJaguarScriptController> spaceJaguarController, bool noclipMode);
	bool spaceJaguarScriptControllerAskingIsKeyPressed(shared_ptr<SpaceJaguarScriptController> spaceJaguarController, string  key);
	void spaceJaguarScriptControllerDidRequestSetWindowTitle(shared_ptr<SpaceJaguarScriptController> spaceJaguarController, string title);
	void spaceJaguarScriptControllerDidRequestPlayAnimationForObjectWithName(shared_ptr<SpaceJaguarScriptController> spaceJaguarController, string animationName, string objectName);
	void spaceJaguarScriptControllerDidRequestRemoveAllObjects(shared_ptr<SpaceJaguarScriptController> spaceJaguarController);

private:

	void cleanAndRestartScriptEngine();

    bool noclipMode = false;
	string startScriptPath;

    NotNull<SpaceJaguarScriptController> scriptController;
    void initialize();
    bool isInitialized = false;
    NotNull<Object> camera;
    NotNull<InputController> inputController;
    shared_ptr<FreeCameraControlsController> noclipCameraController;

};
#endif
