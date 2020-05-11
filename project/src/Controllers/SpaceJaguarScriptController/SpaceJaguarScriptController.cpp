#include "SpaceJaguarScriptController.h"
#include <iostream>
#include <FlameSteelEngineGameToolkit/Utils/FSEGTUtils.h>

using namespace std;
using namespace SpaceJaguarActionRPG;

void tinyjSBindingsToFlameSteelEngineGameToolkit_IsKeyPressed(CScriptVar *v, void *context) {
    auto container = (SpaceJaguarScriptControllerCallContainer *) context;
	auto key = v->getParameter("key")->getString();
    shared_ptr<SpaceJaguarScriptController> spaceJaguarScriptController = container->spaceJaguarScriptController;
    auto tinyJS = container->tinyJS;
    auto dataSourceLocked = spaceJaguarScriptController->dataSource.lock();
    if (dataSourceLocked == nullptr) {
        throwRuntimeException("tinyjSBindingsToFlameSteelEngineGameToolkit_IsKeyPressed error: can't lock dataSource");
    }
    auto isPressed = dataSourceLocked->spaceJaguarScriptControllerAskingIsKeyPressed(spaceJaguarScriptController, key);
	v->getReturnVar()->setInt(isPressed);
}

void tinyJSBindingsToFlameSteelEngineGameToolkit_Print(CScriptVar *v, void *) {
    cout << "Tiny-JS print: " << v->getParameter("text")->getString() << endl;
}

void tinyjSBindingsToFlameSteelEngineGameToolkit_GetObject__private(CScriptVar *v, void *context) {
    auto container = (SpaceJaguarScriptControllerCallContainer *) context;
    auto objectName = v->getParameter("text")->getString();
    shared_ptr<SpaceJaguarScriptController> spaceJaguarScriptController = container->spaceJaguarScriptController;
    auto tinyJS = container->tinyJS;
    auto dataSourceLocked = spaceJaguarScriptController->dataSource.lock();
    if (dataSourceLocked == nullptr) {
        throwRuntimeException("tinyjSBindingsToFlameSteelEngineGameToolkit_GetObject error: can't lock dataSource");
    }
    auto object = dataSourceLocked->spaceJaguarScriptControllerDidRequestObjectWithName(spaceJaguarScriptController, objectName);
    cout << "Tiny-JS get object: " << objectName << endl;
    if (object.get() == nullptr) {
        auto errorString = string("");
        errorString += "SpaceJaguarScriptController: there is no object with name: ";
        errorString += objectName;
        throwRuntimeException(errorString);
    }

    auto id = object->getInstanceIdentifier();
    auto position = FSEGTUtils::getObjectPosition(object);

    auto executeString = string("");
    executeString += "getObject__private__CallResult = newObjectWithIdAndPositionXYZ__private(\"";
    executeString += *id.get();
    executeString += "\",";
    executeString += to_string(position->x);
    executeString += ",";
    executeString += to_string(position->y);
    executeString += ",";
    executeString += to_string(position->z);
    executeString += ");";

	cout << "Get object execute string: " << executeString << endl;

    tinyJS->execute(executeString);
}

void tinyjSBindingsToFlameSteelEngineGameToolkit_exit(CScriptVar *v, void *) {
	auto exitCode = v->getParameter("exitCode")->getInt();
	exit(exitCode);	
}

void tinyjSBindingsToFlameSteelEngineGameToolkit_EnableNoclip(CScriptVar *, void *context) {
    auto container = (SpaceJaguarScriptControllerCallContainer *) context;
    shared_ptr<SpaceJaguarScriptController> spaceJaguarScriptController = container->spaceJaguarScriptController;
    auto tinyJS = container->tinyJS;
    auto delegateLocked = spaceJaguarScriptController->delegate.lock();
    if (delegateLocked == nullptr) {
        throwRuntimeException("tinyjSBindingsToFlameSteelEngineGameToolkit_EnableNoclip error: can't lock delegate");
    }
    delegateLocked->spaceJaguarScriptControllerDidRequestChangeNoclipMode(spaceJaguarScriptController, true);
}

void tinyJSBindingsToFlameSteelEngineGameToolkit_setWindowTitle(CScriptVar *v, void *context) {
    auto container = (SpaceJaguarScriptControllerCallContainer *) context;
    shared_ptr<SpaceJaguarScriptController> spaceJaguarScriptController = container->spaceJaguarScriptController;
    auto tinyJS = container->tinyJS;
	auto text = v->getParameter("text")->getString();
    auto delegateLocked = spaceJaguarScriptController->delegate.lock();
    if (delegateLocked == nullptr) {
        throwRuntimeException("tinyJSBindingsToFlameSteelEngineGameToolkit_SetWindowTitle error: can't lock delegate");
    }
    delegateLocked->spaceJaguarScriptControllerDidRequestSetWindowTitle(spaceJaguarScriptController, text);
}

void tinyjSBindingsToFlameSteelEngineGameToolkit_PlayAnimation__private(CScriptVar *, void *) {
	cout << "tinyjSBindingsToFlameSteelEngineGameToolkit_PlayAnimation__private" << endl;
}

void tinyjSBindingsToFlameSteelEngineGameToolkit_DisableNoclip(CScriptVar *, void *context) {
    auto container = (SpaceJaguarScriptControllerCallContainer *) context;
    shared_ptr<SpaceJaguarScriptController> spaceJaguarScriptController = container->spaceJaguarScriptController;
    auto tinyJS = container->tinyJS;
    auto delegateLocked = spaceJaguarScriptController->delegate.lock();
    if (delegateLocked == nullptr) {
        throwRuntimeException("tinyjSBindingsToFlameSteelEngineGameToolkit_DisableNoclip error: can't lock delegate");
    }
    delegateLocked->spaceJaguarScriptControllerDidRequestChangeNoclipMode(spaceJaguarScriptController, false);
}

void tinyjSBindingsToFlameSteelEngineGameToolkit_AddObject__private(CScriptVar *v, void *context) {
    auto container = (SpaceJaguarScriptControllerCallContainer *) context;
    auto name = v->getParameter("name")->getString();
    auto modelPath = v->getParameter("modelPath")->getString();
    auto x = v->getParameter("x")->getDouble();
    auto y = v->getParameter("y")->getDouble();
    auto z = v->getParameter("z")->getDouble();
    shared_ptr<SpaceJaguarScriptController> spaceJaguarScriptController = container->spaceJaguarScriptController;
    auto tinyJS = container->tinyJS;
    auto delegateLocked = spaceJaguarScriptController->delegate.lock();
    if (delegateLocked == nullptr) {
        throwRuntimeException("tinyjSBindingsToFlameSteelEngineGameToolkit_AddObject error: can't lock delegate");
    }
    delegateLocked->spaceJaguarScriptControllerDidRequestAddObjectWithPath(spaceJaguarScriptController, name, modelPath, x, y, z);
    tinyJS->execute("addObject__private__CallResult = newObjectWithIdAndPositionXYZ__private(0,0,0,0);");
}

void tinyjSBindingsToFlameSteelEngineGameToolkit_UpdateObject__private(CScriptVar *v, void *context) {
    auto container = (SpaceJaguarScriptControllerCallContainer *) context;
    auto name = v->getParameter("name")->getString();
    auto x = v->getParameter("x")->getDouble();
    auto y = v->getParameter("y")->getDouble();
    auto z = v->getParameter("z")->getDouble();
    shared_ptr<SpaceJaguarScriptController> spaceJaguarScriptController = container->spaceJaguarScriptController;
    auto tinyJS = container->tinyJS;
    auto delegateLocked = spaceJaguarScriptController->delegate.lock();
    if (delegateLocked == nullptr) {
        throwRuntimeException("tinyjSBindingsToFlameSteelEngineGameToolkit_UpdateObject error: can't lock delegate");
    }
    delegateLocked->spaceJaguarScriptControllerDidRequestUpdateObjectWithNameAndPositionXYZ(spaceJaguarScriptController, name, x, y, z);
}

void tinyJSBindingsToFlameSteelEngineGameToolkit_Include(CScriptVar *v, void *pointerToTinyJS) {
    auto path = v->getParameter("text")->getString();
    cout << "Tiny-JS include: " << path << endl;
    auto includeScriptString = stringFromFileAtPath(path);
    CTinyJS *tinyJS = (CTinyJS*)pointerToTinyJS;
    tinyJS->execute(includeScriptString);
}

void SpaceJaguarScriptController::initialize() {
    callContainer->spaceJaguarScriptController = shared_from_this();
    callContainer->tinyJS = tinyJS;

    try {
        registerFunctions(tinyJS.get());
        registerMathFunctions(tinyJS.get());
        tinyJS->addNative("function setWindowTitle(text)", &tinyJSBindingsToFlameSteelEngineGameToolkit_setWindowTitle, callContainer.get());
        tinyJS->addNative("function include(text)", &tinyJSBindingsToFlameSteelEngineGameToolkit_Include, tinyJS.get());
        tinyJS->addNative("function print(text)", &tinyJSBindingsToFlameSteelEngineGameToolkit_Print, 0);
        tinyJS->addNative("function getObject__private(text)", &tinyjSBindingsToFlameSteelEngineGameToolkit_GetObject__private, callContainer.get());
        tinyJS->addNative("function addObject__private(name, modelPath, x, y, z)", &tinyjSBindingsToFlameSteelEngineGameToolkit_AddObject__private, callContainer.get());
        tinyJS->addNative("function updateObject__private(name, x, y, z)", &tinyjSBindingsToFlameSteelEngineGameToolkit_UpdateObject__private, callContainer.get());
	tinyJS->addNative("function playAnimation__private(objectName, animationName)", &tinyjSBindingsToFlameSteelEngineGameToolkit_PlayAnimation__private, callContainer.get());
        tinyJS->addNative("function GRANNYPILLS()", &tinyjSBindingsToFlameSteelEngineGameToolkit_EnableNoclip, callContainer.get());
        tinyJS->addNative("function HANGOVER()", &tinyjSBindingsToFlameSteelEngineGameToolkit_DisableNoclip, callContainer.get());
	 tinyJS->addNative("function isKeyPressed(key)", &tinyjSBindingsToFlameSteelEngineGameToolkit_IsKeyPressed, callContainer.get());
	 tinyJS->addNative("function exit(exitCode)", &tinyjSBindingsToFlameSteelEngineGameToolkit_exit, nullptr);
        tinyJS->execute("include(\"com.demensdeum.flamesteelenginegametoolkit.bindings.js\");");
        tinyJS->execute("include(\"com.demensdeumflamesteelenginegametoolkit.private.js\");");
        tinyJS->execute("print(\"Binding success\");");
    }
    catch (CScriptException *error) {
        cout << "Tiny-JS initialize error: " << error->text << endl;
    }
    isInitialized = true;
}

void SpaceJaguarScriptController::setScriptFromFilePath(string path) {
    script = stringFromFileAtPath(path);

    if (script.length() < 1) {
        string errorString = "SpaceJaguarScriptController: trying to run empty script at path:";
        errorString += path;
        errorString += "? crash";
        throwRuntimeException(errorString);
    }
}

void SpaceJaguarScriptController::step() {

    if (isInitialized == false) {
        initialize();
    }
    if (script.length() < 1) {
        return;
    }
    try {
        tinyJS->execute(script);
    }
    catch (CScriptException *error) {
        cout << "---[SCRIPT ERROR START]---" << endl;
        cout << "Tiny-JS error: " << error->text << endl;
        cout << "---[SCRIPT ERROR END]---" << endl;
    }

};
