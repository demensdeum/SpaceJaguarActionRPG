#include "MainController.h"
#include <iostream>

using namespace FlameSteelEngineProject;

#ifdef SPACEJUARACTIONRPG_ANDROID_BUILD
#include "fschest.h"

void extractResourcesForAndroid() {        
    char *archiveBuffer = nullptr;
    size_t size = 0;
    SDL_RWops *io = SDL_RWFromFile("files.fschest", "r");
    if (io != nullptr) {
        size = SDL_RWsize(io);
        archiveBuffer = (char *) malloc(size);
        SDL_RWread(io, archiveBuffer, sizeof(char), size);
    }
    io->close(io);
    
    chdir(SDL_AndroidGetInternalStoragePath());
    
    string outputPath = "files.fschest";
    auto fd = fopen(outputPath.c_str(), "wb");
    fwrite(archiveBuffer, sizeof(char), size, fd);
    fclose(fd);

    FSCHEST_extractChestToDirectory(outputPath.c_str(), SDL_AndroidGetInternalStoragePath());
};
#endif

MainController::MainController(shared_ptr<string> startScriptPath, NotNull<IOSystemParams> params) {
	this->startScriptPath = startScriptPath;
	this->params = params;
};

void MainController::start() {
    cout << "MainController::start()" << endl;

#ifdef SPACEJUARACTIONRPG_ANDROID_BUILD
    extractResourcesForAndroid();    
#endif
    
    mainGameController = make_shared<FlameSteelEngine::GameToolkit::MainGameController>();
	string mainScript = "com.demensdeum.flamesteelengine.application.main.js";

	if (startScriptPath.get()) {
		mainScript = *startScriptPath.get();
	}

	sceneController = make_shared<SceneController>(mainScript);

    mainGameController->setControllerForState(sceneController, scene);

    ioSystem = make_shared<IOSystem>();
    ioSystem->initialize(params);
    window = ioSystem->getWindow();

    mainGameController->setIOSystem(ioSystem->getFSGLIOSystem());

};

void MainController::switchToSceneController() {
    if (state == scene) {
        return;
    }
    state = scene;
    mainGameController->initializeGameFromState(scene);
}

void MainController::startGameLoop() {
    mainGameController->startGameLoop();
}
