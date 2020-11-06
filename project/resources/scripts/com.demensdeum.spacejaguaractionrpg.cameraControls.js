function CreateCameraControls(outputTargetName) {
    var cameraControls = {
      isEnabled: true,
    targetName : outputTargetName,
	step : function() {

    if (this.isEnabled) {
        var target = getObject(this.targetName);
		var camera = getObject("camera");

		camera.position.x = target.position.x;
		camera.position.y = 8;
		camera.position.z = target.position.z;

		camera.rotation.x = 0;
		camera.rotation.y = 89;
		camera.rotation.z = 0;
		updateObject(camera);
  }
	}
   };
	return cameraControls;
}
