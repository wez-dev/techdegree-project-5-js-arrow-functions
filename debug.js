//Identify the errors in syntax and correct it!

//const multiplyUs = num1, num2 => console.log(num1 * num2); 

const multiplyUs = (num1, num2) => console.log(num1 * num2); 

//const subtractFromTen = num => 
//	const diff = 10 - num; 
//	console.log(diff);

const subtractFromTen = num => {
	const diff = 10 - num; 
	console.log(diff);
}

//const printDate = date = function() {
//	console.log(date);
//}

const printDate = date =>	console.log(date);


multiplyUs(2,6);
subtractFromTen(4);
printDate('1/16/18');