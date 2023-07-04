// Any type its allows all type validation, but this main disadvantage is not specific type validation, default venela javascript also same this, so that max avoid it for any  
const person2:{
    name:string;
    age:number;
    hobbies:string[]; // It support only string format array of elements
    marks:number[];   // It support only number format array of elements 
    info:any[]       //  It allows any type like number/string/boolean/

} = {
    name:"Venkata Satya",
    age:32,
    hobbies:['Watching Movies','Playing Cricket'],
    marks:[99,56,67],
    info:['Surya',32,true,{height:5.2,weight:68},["SSC","Diplomaa","B.Tech"]]

}
console.log(person2.info);