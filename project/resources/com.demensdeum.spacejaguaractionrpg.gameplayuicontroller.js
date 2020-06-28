function createGameplayUIController() {
    var controller = {
        initializeIfNeeded : function() {
            if (this.initialized === undefined) {               
                this.initialized = true;
                
                this.healthBar = createObject();
                this.healthBar.name = "Health Bar";
                this.healthBar.modelPath = "com.demensdeum.health.plane.fsglmodel"; 
                
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
            
            print("Rotation:");
            print(rotation.x);
            print(rotation.y);
            print(rotation.z);
            
            //var targetPosition = cameraPositionVector->vec3() + glm::vec3(cameraFront * z) + right * x;
            var targetPosition = cameraPosition;
            
            this.healthBar.position.x = targetPosition.x;
            this.healthBar.position.y = targetPosition.y;
            this.healthBar.position.z = targetPosition.z;
            updateObject(this.healthBar);
        }
    };
    
    return controller;
};
