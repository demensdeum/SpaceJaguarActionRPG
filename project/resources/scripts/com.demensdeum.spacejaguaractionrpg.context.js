function Context() {
        this.initializeIfNeeded = function () {
            if (this.initialized === undefined) {
                print("Context initialized");

                var kGameTitle = "Space Jaguar v0.0.2";
                setWindowTitle(kGameTitle);

                this.gameplayData = new GameplayData();
                this.companyLogoController = CreateCompanyLogoController();
                this.engineLogoController = CreateEngineLogoController();
                this.menuController = CreateMenuController(this);
                this.newGameController = new NewGameController(this, this.gameplayData);
                this.spaceShipController = new SpaceShipController(this, this.gameplayData);
                this.intergalacticNavigatorController = new IntergalacticNavigatorController(this);
                this.mapSceneController = new MapSceneController(this, this.gameplayData);
                this.locationGeneratorController = new LocationGeneratorController(this, this.gameplayData);

                this.setCurrentController(this.newGameController);
                this.initialized = true;
            }
        };

        this.setCurrentController = function(currentController) {
                this.currentController = currentController;
                this.currentController.delegate = this;
        };

        this.step = function() {
            this.initializeIfNeeded();
            this.currentController.step();
        };

        this.controllerDidFinish = function(controller) {
            if (controller == this.companyLogoController) {
                this.setCurrentController(this.engineLogoController);
            }
            else if (controller == this.engineLogoController) {
                this.setCurrentController(this.menuController);
            }
            else if (controller == this.menuController) {
                this.setCurrentController(this.newGameController);
            }
            else if (controller == this.newGameController) {
              this.setCurrentController(this.mapSceneController);
            }
            else if (controller == this.locationGeneratorController) {
              this.setCurrentController(this.mapSceneController);
            }
        };

        this.menuControllerDidRequestNewGame = function(controller) {
            this.setCurrentController(this.newGameController);
        };

        this.newGameControllerDidRequestExit = function(newGameController) {
            this.setCurrentController(this.spaceShipController);
        };

        this.shipControllerDidRequestGoToDockedLocation = function(shipController) {
          this.setCurrentController(this.mapSceneController);
        };

        this.shipControllerDidRequestFlyToAnotherPlace = function(shipController) {
          this.setCurrentController(this.intergalacticNavigatorController);
        };

        this.intergalacticNavigatorControllerDidRequestGoToCaptainSeat = function(intergalacticNavigatorController) {
          this.setCurrentController(this.spaceShipController);
        };

        this.intergalacticNavigatorControllerDidRequestGoToRandomLocation = function(intergalacticNavigatorController) {
          this.setCurrentController(this.locationGeneratorController);
        };
    };
