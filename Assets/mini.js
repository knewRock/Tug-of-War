static var i : float;
var pos : Vector2 = new Vector2(20,40);
var size : Vector2 = new Vector2(100,35);
var button : Texture2D;
var rightRect : Rect;
var j : int;
var bool : boolean;

function Start() {
	j = 0;
	bool = false;
	wait();
	rightRect= new Rect(Screen.width*10/100,Screen.height-Screen.height*22/100,Screen.width*10/100,Screen.width*10/100);
}

function OnGUI() {
    /** Player1 Button **/
    GUI.RepeatButton(rightRect, button );
	
}

function Update() {
	if( run.bool && !bool) {
		for(var t : Touch in Input.touches) {
    		var vec : Vector2 = t.position;
    		vec.y = Screen.height - vec.y; // You need to invert since GUI and screen have differnet coordinate system
  	 
    		if( rightRect.Contains(vec) && t.phase == TouchPhase.Ended ) {
    			j++;
    		}
    	}
    	
    }
    CheckTime();
}

function CheckTime(){
	if( bool ) Application.LoadLevel("startScreen");
}
function wait(){
	yield WaitForSeconds(10);
	bool = true;
}	