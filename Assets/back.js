#pragma strict

static var ok = false;
function Start () {
	wait();
}

function Update () {
    if( Input.touchCount > 0 ) {
    
    	if (ok) {
			Application.LoadLevel("startScreen");
			ok = false;
		}
			
    }
}

function wait() {
	yield WaitForSeconds(5);
	ok = true;

}