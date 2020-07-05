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
            
            var cameraPosition = camera.position;
            var cameraRotation = camera.rotation;
            
            print("Camera Position:");
            print("x: " + cameraPosition.x);
            print("y: " + cameraPosition.y);
            print("z: " + cameraPosition.z);
            
            print("Camera Rotation:");
            print("rX: " + cameraRotation.x);
            print("rY: " + cameraRotation.y);
            print("rZ: " + cameraRotation.z);
            
            var yaw = degreesToRadians(-90 - cameraRotation.x);
            var pitch = degreesToRadians(0 - cameraRotation.y);
            
            var normalizedFrontVector = new Object();
            normalizedFrontVector.x = Math.cos(pitch) * Math.cos(yaw);
            normalizedFrontVector.y = Math.sin(pitch);
            normalizedFrontVector.z = Math.cos(pitch) * Math.sin(yaw);
            
            print("Normalized front vector:");
            print("x: " + normalizedFrontVector.x);
            print("y: " + normalizedFrontVector.y);
            print("z: " + normalizedFrontVector.z);            

            var frontVector = normalizedFrontVector;
            var targetPosition = cameraPosition;
            targetPosition.x += frontVector.x;
            targetPosition.y += frontVector.y;
            targetPosition.z += frontVector.z;
            
            this.healthBar.position.x = targetPosition.x;
            this.healthBar.position.y = targetPosition.y;
            this.healthBar.position.z = targetPosition.z;
            
            var lookAtMatrix = lookAt(normalizedFrontVector, cameraPosition);
            var rotationVector = eulerRotationVectorFromMat4(lookAtMatrix);
            
            print("Rotation vector");
            print("x: " + rotationVector.x);
            print("y: " + rotationVector.y);
            print("z: " + rotationVector.z);
            
            this.healthBar.rotation.x = degreesToRadians(rotationVector.x);
            this.healthBar.rotation.y = degreesToRadians(rotationVector.y);
            this.healthBar.rotation.z = degreesToRadians(rotationVector.z);
            
            
            updateObject(this.healthBar);
        }
    };
    
    return controller;
};
