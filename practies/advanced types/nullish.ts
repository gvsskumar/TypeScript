// Nullish using ?? it is undefined also takes Default value
// Undefined
const userInput = undefined;
const storedData = userInput??'Default';
console.log(storedData); //Default

// Null
const userInput0 =null;
const storedData0 = userInput0??'Default';
console.log(storedData0); //

// Empty
const userInput1 = '';
const storedData1 = userInput1??'Default';
console.log(storedData1); // empty space appended

// Variable Assign Value
const userInput2 = "Surya";
const storedData2 = userInput2??'Default';
console.log(storedData2); //Surya