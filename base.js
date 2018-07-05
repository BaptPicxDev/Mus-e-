
      
var canvas ; 
var engine ;
var scene ;
var camera ; 
var light ;


function setUpBabylon(){

	canvas = document.getElementById("renderCanvas");
	engine = new BABYLON.Engine(canvas, true);

	scene = new BABYLON.Scene(engine);
        
	camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 5, -10), scene);
        camera.setTarget(BABYLON.Vector3.Zero());
        camera.attachControl(canvas, true);

	light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);
        light.intensity = 0.7;   
}


function setUpCallbacks(anim, click){

	// Callback d'animation
	// ====================

	scene.registerBeforeRender(anim) ; 

	// Callback d'affichage
	// ====================
        engine.runRenderLoop(function () {
            scene.render();
        });

        // Callback de retaillage
	// ======================
        window.addEventListener("resize", function () {
            engine.resize();
        });

	// Callback de sélection par click souris
	// ======================================
	window.addEventListener("click",function(event){
		var pickResult = scene.pick(event.clientX, event.clientY) ;
		if(pickResult.hit)console.log(pickResult.pickedMesh.name) ;  
	}) ;
    
 };
        







