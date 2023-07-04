// Tuples mean fixed length of array items like [id,role] ,[id,item,price,qty]
const person:{
    uname:string;
    role:[number,string];
} = {
    uname:"Venkata Satya",
    role:[1,"Admin"]
}
console.log(person.uname);