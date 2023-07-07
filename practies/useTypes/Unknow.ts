let userInput: unknown;
let userName : string;
userInput = 5;
userInput = 'Max';
if(typeof userInput==='string'){
    userName = userInput;
    console.log(typeof userName);
}
//userName = userInput; // Error : Type 'unknown' is not assignable to type 'string'