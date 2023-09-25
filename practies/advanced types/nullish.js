// Nullish using ?? it is undefined also takes Default value
// Undefined
var userInput = undefined;
var storedData = userInput !== null && userInput !== void 0 ? userInput : 'Default';
console.log(storedData);
// Null
var userInput0 = null;
var storedData0 = userInput0 !== null && userInput0 !== void 0 ? userInput0 : 'Default';
console.log(storedData0);
// Empty
var userInput1 = '';
var storedData1 = userInput1 !== null && userInput1 !== void 0 ? userInput1 : 'Default';
console.log(storedData1);
// Variable Assign Value
var userInput2 = "Surya";
var storedData2 = userInput2 !== null && userInput2 !== void 0 ? userInput2 : 'Default';
console.log(storedData2);
