#pragma strict
var Cam : GameObject;
var target : GameObject;
var Butt1 : CircleCollider2D;
var Butt2 : CircleCollider2D;
var ButtStart : BoxCollider2D;
var T1 = null;
var T2 = null;
function Start () {

}

function Update (){
	for(var i in Input.touches){
		//if(i.position == new Vector2(-0.1,0.2))Cam.transform.position = new Vector2(0,-10);
		if(Vector2.Distance(i.position,Butt1.center)<=Butt1.radius&&T1==null)T1=i;
		else if(Vector2.Distance(i.position,Butt2.center)<=Butt2.radius&&T2==null)T2=i;
		else if(i.phase == TouchPhase.Ended && i == T1){
			target.transform.position.x -= 1;
			T1 = null;
			}
		else if(i.phase == TouchPhase.Ended && i == T2){
			target.transform.position.x += 1;
			T2 = null;
			}
	}
}