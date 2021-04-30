//Make the arrow function syntax as concise as possible
//const multiplyByTen = (num) => {
//	return 10 * num;
//}
const multiplyByTen= num => 10 * num;

const printToTen = () => {
	for (let i = 1; i <= 10; i++) {
		console.log(i);
	}
}
//The above function is as concise as it can be.

//const addUs = (num1, num2) => {
//	console.log(num1 + num2);
//}
const addUs = (num1, num2) => console.log(num1 + num2);