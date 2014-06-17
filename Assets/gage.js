static var i : float;
var pos : Vector2 = new Vector2(20,40);
var size : Vector2 = new Vector2(100,35);
var progressBarEmpty : Texture2D;
var progressBarFull : Texture2D;
var button : Texture2D;
var button2 : Texture2D;
var buttonP : Texture2D;
var chuck : GameObject;
var p1 : float;
var p2 : float;
var rightRect : Rect;
var leftRect : Rect;

var rightBar : Rect;
var leftBar : Rect;

var rightBarT : Texture2D;
var leftBarT : Texture2D;

var skillP1: Texture2D;
var skillP2: Texture2D;
var skillRect1: Rect;
var skillRect2: Rect;

var powerP1 : float;
var powerP2 : float;

var obj : GameObject;
function Start() {
	powerP1 = 0.1f;
	powerP2 = 0.1f;
	i = 0f;
	p1 = 0f;
	p2 = 0f;
	rightRect= new Rect(Screen.width*10/100,Screen.height-Screen.height*22/100,Screen.width*10/100,Screen.width*10/100);
	leftRect = new Rect(Screen.width - Screen.width*20/100,Screen.height-Screen.height*22/100,Screen.width*10/100,Screen.width*10/100);
	
	rightBar= new Rect(Screen.width*15/100,Screen.height-Screen.height*34/100,Screen.width*5/100,Screen.width*5/100);
	leftBar = new Rect(Screen.width - Screen.width*19/100,Screen.height-Screen.height*34/100,Screen.width*5/100,Screen.width*5/100);
	
	skillRect1 = new Rect(Screen.width*20/100, Screen.height-Screen.height*15/100, Screen.width*5/100, Screen.width*5/100);
	skillRect2 = new Rect(Screen.width -Screen.width*25/100, Screen.height-Screen.height*15/100, Screen.width*5/100, Screen.width*5/100);
}

function OnGUI()
{	/** gage p1 **/
    GUI.DrawTexture(Rect(Screen.width*5/100, pos.y, Screen.width*20/100*p1, Screen.height*10/100), progressBarFull);
    GUI.DrawTexture(Rect(Screen.width*5/100, pos.y,Screen.width*20/100, Screen.height*10/100), progressBarEmpty);
    
    /** gage p2 **/
    GUI.DrawTexture(Rect(Screen.width -Screen.width*20/100- Screen.width*5/100, pos.y, Screen.width*20/100*p2, Screen.height*10/100), progressBarFull);
    GUI.DrawTexture(Rect(Screen.width -Screen.width*20/100- Screen.width*5/100, pos.y, Screen.width*20/100, Screen.height*10/100), progressBarEmpty);
    
    /** Player1 Button **/
    GUI.RepeatButton(rightRect, button );
	
	/** Player2 Button **/
	GUI.RepeatButton(leftRect, button2 );
	
	GUI.DrawTexture(rightBar,rightBarT);
	GUI.DrawTexture(leftBar,leftBarT);
	
	
	GUI.Button(skillRect1,skillP1); 
	GUI.Button(skillRect2,skillP2); 
	
}

function Update() {
	if( run.bool ) {
		for(var t : Touch in Input.touches) {
    		var vec : Vector2 = t.position;
    		vec.y = Screen.height - vec.y; // You need to invert since GUI and screen have differnet coordinate system
  	 
    		if( rightRect.Contains(vec) && t.phase == TouchPhase.Ended ) {
    			if( p1 <= 1) p1 += 0.01;
    			chuck.transform.position.x -= powerP1;
    		}
    			
    		if( leftRect.Contains(vec) && t.phase == TouchPhase.Ended ) {
    			if( p2 <= 1 ) p2 += 0.01;
    			chuck.transform.position.x += powerP2;
    		}
    		
    		if( skillRect1.Contains(vec) && t.phase == TouchPhase.Ended){
    			if(p1>=1){
    				skillFourP1();
    				p1 -= 1;
    			}
    			else if(p1>=0.75){
    				skillThreeP1();
    				p1 -= 0.75;
    			}
    			else if(p1>=0.50){
    				skillTwoP1();
    				p1 -= 0.50;
    			}
    			else if(p1>= 0.25){
    				skillOneP1();
    				p1 -= 0.25;
    			}
    		}
    		else if( skillRect2.Contains(vec) && t.phase == TouchPhase.Ended){
    			if(p2>=1){
    				skillFourP2();
    				p2 -= 1;
    			}
	   			else if(p2>=0.75){
    				skillThreeP2();
    				p2 -= 0.75;
    			}
    			else if(p2>=0.50){
    				skillTwoP2();
    				p2 -= 0.50;
    			}
    			else if(p2>= 0.25){
    				skillOneP2();
    				p2 -= 0.25;
    			}
    		}
    	}
    	
    }
    CheckNodeHitRight();
}

function CheckNodeHitRight(){
	if(chuck.transform.position.x <= -2.7){
		Application.LoadLevel( "win1" );
	}
	else if(chuck.transform.position.x >= 2.7){
		Application.LoadLevel( "win2" );
	}

}

function skillTwoP1(){
	chuck.transform.position.x -= 1;
}

function skillThreeP1(){
	swap();
}
function skillFourP1(){
	for( var i = 0; i < 5; i++) {
		leftRect= new Rect(Screen.width - Screen.width / 2 * Random.Range(1, 10)/10,
			Screen.height - Screen.height * Random.Range(1, 10)/10,Screen.width*10/100,Screen.width*10/100);
		yield WaitForSeconds(1);
	}
	leftRect = new Rect(Screen.width - Screen.width*20/100,Screen.height-Screen.height*22/100,Screen.width*10/100,Screen.width*10/100);
	
}
function skillOneP1(){
	powerP1 = 0.15f;
	yield WaitForSeconds(3);
	powerP1 = 0.1f;
}


function skillTwoP2(){
	chuck.transform.position.x += 1;
}
function skillThreeP2(){
	swap();
}
function skillFourP2() {
	for( var i = 0; i < 5; i++) {
		rightRect= new Rect( Screen.width / 2 * Random.Range(1, 10)/10,
			Screen.height - Screen.height * Random.Range(1, 10)/10,Screen.width*10/100,Screen.width*10/100);
		yield WaitForSeconds(1);
	}
	rightRect= new Rect(Screen.width*10/100,Screen.height-Screen.height*22/100,Screen.width*10/100,Screen.width*10/100);
	
}
function skillOneP2(){
	powerP2 = 0.15f;
	yield WaitForSeconds(3);
	powerP2 = 0.1f;
}

function swap() {
	var temp : Rect = rightRect;
	rightRect = leftRect;
	leftRect = temp;
	yield WaitForSeconds(5);
	rightRect= new Rect(Screen.width*10/100,Screen.height-Screen.height*22/100,Screen.width*10/100,Screen.width*10/100);
	leftRect = new Rect(Screen.width - Screen.width*20/100,Screen.height-Screen.height*22/100,Screen.width*10/100,Screen.width*10/100);
}