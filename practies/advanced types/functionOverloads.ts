type Combine = string|number;
//type Numeric = number|boolean;
//type Universal = Combine & Numeric;
function add(a:number,b:number):number;
function add(a:string,b:string):string;
function add(a:string,b:number):string;
function add(a:number,b:string):string;
function add(a:Combine,b:Combine){
    if(typeof a==='string' || typeof b==='string'){  // typeGuards represents the typeof or instanceof
        return a.toString()+b.toString();
    }
  return a+b;
}
const addNumber =add(5,6);
console.log(addNumber); 

const addString =add("Surya","Kumar");
console.log(addString.split('')); 

const addStringNumber =add("Surya",502);
console.log(addStringNumber.split('')); 

const addNumberString =add("Surya",502);
console.log(addNumberString.split('')); 
