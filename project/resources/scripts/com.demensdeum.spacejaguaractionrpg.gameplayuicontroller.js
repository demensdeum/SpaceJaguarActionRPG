function createGameplayUIController() {
    var controller = {
	addCrosshair : function() {
                this.crosshair = createObject();
                this.crosshair.name = "Crosshair";
		this.crosshair.modelPath = "com.demensdeum.spacejaguaractionrpg.crosshair.plane.fsglmodel";              
                var position = new Object();
                position.x = 0;
                position.y = 0;
                position.z = 0;
			this.crosshair.scale.y = 2;
                this.crosshair.position = position;			
                addObject(this.crosshair);
	},
	addHealthBar : function() {
                this.healthBar = createObject();
                this.healthBar.name = "Health Bar";
		this.healthBar.modelPath = "com.demensdeum.spacejaguaractionrpg.health.plane.fsglmodel";              
                var position = new Object();
                position.x = 0;
                position.y = 0;
                position.z = 0;
			this.healthBar.scale.y = 2;
                this.healthBar.position = position;			
                addObject(this.healthBar);
	},
        initializeIfNeeded : function() {
            if (this.initialized === undefined) {               
                this.initialized = true;
			this.addHealthBar();
			this.addCrosshair();
            }
        },
	makeTargetLookAtCamera : function(target) {
            var camera = getObject("camera");
            
            var frontPosition = positionVectorToFront(camera, 2);
            target.position.x = frontPosition.x;
            target.position.y = frontPosition.y;
            target.position.z = frontPosition.z;
                        
            var eye = camera.position;
            var center = frontPosition;
            
            var up = new Object();
            up.x = 0;
            up.y = 1;
            up.z = 0;          
            
            var lookAtMatrix = lookAt(eye, center, up);            
            var rotation = eulerRotationVectorFromMat4(lookAtMatrix);
            this.target.rotation.x = rotation.x + toRadians(35);
            this.target.rotation.y = rotation.y + toRadians(-5);
            this.target.rotation.z = rotation.z + toRadians(20);
            
            updateObject(target);
	},
        step : function() {
		this.makeTargetLookAtCamera(this.crosshair);
        }
    };
    
    return controller;
};
