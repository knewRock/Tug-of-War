#pragma strict
static var bool : boolean;

function Start () {
	bool = false;
	yield WaitForSeconds(13.4);
	bool = true;
	Destroy(gameObject);
}

function Update () {
	
}