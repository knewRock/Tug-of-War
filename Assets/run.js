#pragma strict
static var bool : boolean;
var aLabel: GameObject;


function Start () {
	bool = false;
	yield WaitForSeconds(3.2);
	bool = true;
	Destroy(gameObject);
}

function Update () {
	
}