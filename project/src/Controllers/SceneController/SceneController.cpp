#include "SceneController.h"
#include <iostream>

using namespace std; 

void SceneController::initialize() {
	isInitialized = true;
	cout << "initialized" << endl;
	// add cube to scene
}

 void SceneController::step() {
	if (isInitialized == false) {
		initialize();
	}
    renderer->render(gameData);     
 }
