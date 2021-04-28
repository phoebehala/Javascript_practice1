
/*create 5 variables using animal names and call them on your index.html*/
let myVariable = ['dogs', 'cats', 'rabbits', 'tigers', 'lions',];
document.getElementById('animal1').innerHTML = myVariable[0];
document.getElementById('animal2').innerHTML = myVariable[1];
document.getElementById('animal3').innerHTML = myVariable[2];
document.getElementById('animal4').innerHTML = myVariable[3];
document.getElementById('animal5').innerHTML = myVariable[4];

/*Create 1 operator to perform this equation  49 + 20 - 19  call it on your index.html*/
document.getElementById('operator').innerHTML = 49 + 20 - 19;

/*Create 1 operator using variables to perform this equation  30 + 20 * 10 call it on your index.html*/
var x, y, z;
x = 30;
y = 20;
z = 10;
document.getElementById('opva').innerHTML = x + y - z;


/*Create 1 Function that performs this operation  40 + 20 - 10 call it on your index.html*/
var d = myFunction (40, 20, 10)
document.getElementById('fc').innerHTML = d;
function myFunction (a, b, c) {
	return a + b -c;
}


/*Create 1 condition when button clicked change text call it on your index.html .*/
function myFunction1(){
	var hour = new Date().getHours(); /*to get time from my computer*/
	var greeting; 
	if (hour < 12){
		greeting = "Good Morning";
	}
	
	else if (12<hour<18){
		greeting = "Good afternoon";
	}

	else{
	greeting ="Good evening";	
	}
	document.getElementById('bt').innerHTML = greeting;	
}





