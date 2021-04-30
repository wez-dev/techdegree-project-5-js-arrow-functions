//Convert this declarative function into an arrow function

//function addToTen(num) {
//  return 10 + num;
//}
const addToTen = num => 10 + num;

console.log(addToTen(4));
//Note: no () for single parameters being passed. Also no return statement as it is assumed that a single line arrow function will return the value


//Convert this declarative function into an arrow function

//function divideUs(num1, num2) {
//  return num1/num2;
//}

const divideUs = (num1, num2) => num1/num2;
console.log(10/2);
//Note: () used when two or more parameters passed.

//Convert this declarative function into an arrow function
//function printMyName() {
//  let myName = 'Ashley';
//	console.log(myName);
//}

const printMyName = () => {
  let myName = 'Ashley';
	console.log(myName);
}
printMyName();
//Notice: emptpy () to note no parameters passes. Also {} because there are two or more lines of code.