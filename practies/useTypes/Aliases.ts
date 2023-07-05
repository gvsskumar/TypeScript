// Aliases type support multiple like `number|string`
type Combineable = number|string;
type Conversion = 'as-number'|'as-text';
function combined(input1:Combineable,input2:Combineable,resultConversion:Conversion){
    let result;
    if(typeof input1==='number' && typeof input2==='number'||resultConversion==='as-number'){
        result = +input1 + +input2;
    }else{
        result = input1.toString() + input2.toString();
    }
    return result;
}
const combinedAge = combined(29,32,'as-number');
console.log(combinedAge);
const combinedAge2 = combined('29','32','as-number');
console.log(combinedAge2);

const combinedNames = combined('Venkata','Satya','as-text');
console.log(combinedNames);

//---------------------Example-3----------------//
type User = { name: string; age: number };
const u1: User = { name: 'Max', age: 30 }; // this works!

type Userobj = { name: string; age: number };
 
function greet(user: Userobj) {
  console.log('Hi, I am ' + user.name);
}
 
function isOlder(user: Userobj, checkAge: number) {
  return checkAge > user.age;
}
