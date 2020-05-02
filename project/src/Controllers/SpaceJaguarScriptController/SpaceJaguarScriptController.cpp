#include "SpaceJaguarScriptController.h"
#include <iostream>

using namespace std;
using namespace SpaceJaguarActionRPG;

void tinyJSPrint(CScriptVar *v, void *) {
	cout << "Tiny-JS print: " << v->getParameter("text")->getString() << endl;
}

void SpaceJaguarScriptController::initialize() {
	try {
		tinyJS->addNative("function print(text)", &tinyJSPrint, 0);
		tinyJS->execute("print(\"Binding success\");");
	}
	catch (CScriptException *error) {
		cout << "Tiny-JS error: " << error->text << endl;
	}
	isInitialized = true;
}

void SpaceJaguarScriptController::step() {

	if (isInitialized == false) {
		initialize();
	}

};
