var num1, num2 = 0;

var numInput = document.getElementById('numInput');
var outputField = document.getElementById("outputPlace");
var historyField = document.getElementById("history");
var result = 0;
var myOp = "";

function calculate(op) {

	num1 = parseInt(numInput.value);
	
	if (op == 'Clear'){
		
		num1 = 0;
		num2 = 0;
		result = 0;
		op = "";
		outputField.innerHTML = "Something Here";
		historyField.innerHTML = "";
	} 
	
	
	else if(num1 >= 0){
	
	var result = eval(`${num2} ${op} ${num1}`);
	

	outputField.innerHTML = (result);
	historyField.innerHTML += (" " + num1 + " " + op);
	numInput.value = "";

	num2 = result;
	num1 = 0;
	}
	
}
