function showdate(){
	document.getElementById('date').innerHTML=Date();
}

let fname= "Tejendra";
let lname= "Paudel";
let a= 2.5;
let b= 3.34343;
let sum= a*b;
document.write(sum.toFixed(2)+"<br>");
document.write(fname+" "+lname+"<br>");

let myAge= 27;
let yourAge= 29;

if (myAge > yourAge) {
	document.write("Iam your big brother"+"<br>");
}
else{
	document.write("Iam your small brother"+"<br>");
}

for (var i = 1; i <= 5; i++) {
	document.write(i+"<br>");
}

while(myAge<=30){
	document.write(myAge+"<br>");
	myAge++;
}

do{
	document.write(yourAge+"<br>");
	yourAge++;
}while(yourAge<=32);

//Array

const array= [2,3,4,5,6,7,8,9];

array.forEach(function(abc){document.write(abc+" ")});
document.write("<br>");

array.shift();
array.forEach(function(abc){document.write(abc+" ")});
document.write("<br>");

array.unshift(1);
array.forEach(function(abc){document.write(abc+" ")});
document.write("<br>");

array.unshift(1);
array.forEach(function(abc){document.write(abc+" ")});
document.write("<br>");

array.pop();
array.forEach(function(abc){document.write(abc+" ")});
document.write("<br>");

array.push(10);
array.forEach(function(abc){document.write(abc+" ")});
document.write("<br>");

array.splice(1,2,"3");
array.forEach(function(abc){document.write(abc+" ")});
document.write("<br>");


//Function
function printname(){
	document.getElementById('name').innerHTML = "Tejendra";
//	document.write("Tejendra Paudel");
}

function calculateInterest(){
	let p= document.getElementById('p').value;
//	alert(p);
	let t= document.getElementById('t').value;
	let r= document.getElementById('r').value;
	let i= p*t*r/100;
	document.getElementById('interest').innerHTML= "your interest is " + i;
}

//how to make object

let person= {
	fname : "Tejendra",
	lname : "Paudel",
	age : 27,
	location : "Takasaki",
	fullname : function(){
		return this.fname + this.lname;
	}
};
function showObject(){
	document.getElementById('object').innerHTML = person.fname;
}

document.write(person.fullname());

//for CSS
/*
div#byaj {
	background-color: red;
	width: 25%;
}
*/

//for HTML: body ko tala html ko mathi paste gardine
/*
	<script src="script.js">
		
	</script>

<button onclick="printname()">My Name</button>
<h1 id="name"></h1>

<label>add principal</label><br>
<input type="number" id="p"><br>
<label>add time period</label><br>
<input type="number" id="t"><br>
<label>add interest rate</label><br>
<input type="number" id="r"><br>

<button onclick="calculateInterest()">calculate interest</button>
<div id="byaj">
	<p id="interest"></p>
</div>

<button onclick="showObject()">show object</button>
<p id="object"></p>
*/