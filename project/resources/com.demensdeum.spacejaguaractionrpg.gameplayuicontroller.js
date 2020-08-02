function createGameplayUIController() {
    var controller = {
        initializeIfNeeded : function() {
            if (this.initialized === undefined) {               
                this.initialized = true;
                
                this.healthBar = createObject();
                this.healthBar.name = "Health Bar";
                this.healthBar.modelPath = "com.flamesteelengine.smallCenteredCubeTest.fsglmodel";                 
                
                var position = new Object();
                position.x = 0;
                position.y = 0;
                position.z = 0;

                this.healthBar.position = position;
                addObject(this.healthBar);
            }
        },
        step : function() {
            print("Game UI Controller step");
            var camera = getObject("camera");
            
            var frontPosition = positionVectorToFront(camera, 0.7);
            this.healthBar.position.x = frontPosition.x;
            this.healthBar.position.y = frontPosition.y;
            this.healthBar.position.z = frontPosition.z;
                        
            var eye = camera.position;
            var center = frontPosition;
            
            var up = new Object();
            up.x = 0;
            up.y = 1;
            up.z = 0;          
            
            var lookAtMatrix = lookAt(eye, center, up);
            print("PPPRINTT MATTTRIX");
            printMatrix(lookAtMatrix);
            
            var rotation = eulerRotationVectorFromMat4(lookAtMatrix);
            print("RROOTTATION VECTOR");
            printVector(rotation);
            this.healthBar.rotation.x = rotation.x;
            this.healthBar.rotation.y = rotation.y + toRadians(90);;
            this.healthBar.rotation.z = -rotation.z;
            
            updateObject(this.healthBar);
        }
    };
    
    return controller;
};
