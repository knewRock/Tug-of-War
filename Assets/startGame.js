#pragma strict
var aRect : Rect;
var col : BoxCollider2D;
function Start () {
	yield WaitForSeconds(2);
	aRect = new Rect( Screen.width * 41/100, Screen.height * 46/100, Screen.width * 17/100, Screen.height *13/100);
}

function Update () {
	for(var t : Touch in Input.touches) {
		var vec : Vector2 = t.position;
    	vec.y = Screen.height - vec.y;
		if( aRect.Contains(vec) && t.phase == TouchPhase.Ended ) {
    		Application.LoadLevel("Tug Of War");
    	}
    }
    if(Input.GetMouseButtonDown(0)){
    	Debug.Log( aRect.x + ':' + aRect.y + "||" + Input.mousePosition.x +" : "+Input.mousePosition.y );
		if( aRect.Contains(Input.mousePosition) ) {
    		Application.LoadLevel("Tug Of War");
    	}
	}
}