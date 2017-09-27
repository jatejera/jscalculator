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
	
	result = eval(`${num2} ${op} ${num1}`);
	

	historyField.innerHTML += (" " + op + " " + num1);
	numInput.value = "";

	num2 = result;
	num1 = 0;
	}
	
	else if (op == '='){
		outputField.innerHTML = (result);
	}
}
