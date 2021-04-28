/* Variable */
let myvariable = "Phoebe"

document.getElementById('test').innerHTML = myvariable;

/* Operator */
document.getElementById('test1').innerHTML = (5+6)*10;

var x, y;
x = 5;
y = 6;
document.getElementById('test2').innerHTML = x + y;


/* functopn */
var z = myFunction (4, 3)
document.getElementById('test3').innerHTML = z;
function myFunction (a, b) {
	return a * b;
}

/* functopn Temperature */
function toCelsius (fahrenheit) {
	return (5/9) *(fahrenheit - 32);
}
	document.getElementById('test4').innerHTML = toCelsius(77);



/* Conditions */
function myFunction1(){
	var hour = new Date().getHours(); /*to get time from your computer*/
	var greeting; 
	if (hour < 18){
		greeting = "Good Day";
	}
	else{
	greeting ="Good evening";	
	}
	document.getElementById('test5').innerHTML = greeting;	
}




