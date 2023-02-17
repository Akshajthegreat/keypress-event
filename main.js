var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");

window.addEventListener("keydown", my_keydown);
function mykeydown(e){
keypressed=e.keyCode;
if (keypressed=='38') {
up();
console.log("up");
}

if (keypressed=='40') {
    down();
    console.log("down");
    }
    if (keypressed=='39') {
        right();
        console.log("right");
        }
        if (keypressed=='37') {
            left();
            console.log("left");
            }
}
function alphabetkey(){
    img_image="Alpkey.png";
	add();

       
    }
    

function specialkey(){
	img_image="spkey.png";
	add();
		
    }
    

function otherkey(){
    img_image="otherkey.png";
	add();
    }
    

function numberkey(){
    img_image="numkey.png";
	add();
    }
	function arrowkey(){
		img_image="Arrkey.png";
		add();
		}
    
