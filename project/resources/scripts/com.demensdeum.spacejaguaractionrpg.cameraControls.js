function CreateCameraControls(outputTargetName) {
    var cameraControls = {
    targetName : outputTargetName,       
	step : function() {
        var target = getObject("Jag");
		var camera = getObject("camera");

		camera.position.x = target.position.x;
		camera.position.y = 8;
		camera.position.z = target.position.z;

		camera.rotation.x = 0;
		camera.rotation.y = 89;
		camera.rotation.z = 0;
		updateObject(camera);
	}
   };
	return cameraControls;
}
