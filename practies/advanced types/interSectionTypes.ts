type person = {
    name:string,
    age:number
}
type job = {
    jobTitle : string,
    workLocation:string
}
type role = {
    skills:string[]
}
type emp = person & job & role;

const employee : emp = {
    name:"Kumar",
    age:32,
    jobTitle:"Frontend Developer",
    workLocation:"Hyderabad",
    skills:["ReactJS","Redux","Material UI","CSS", "JAvascript"]
}
console.log(employee);
// Excuted cmd :  tsc.cmd Watch.ts --watch (or) tsc.cmd Watch.ts -w


/*
Q-1) What is type intersection in TypeScript?
->An intersection types combines multiple types into one.
->This allows you to add together existing types to get a single type that has all the features you need.
->The & symbol is used to create an intersection, 
*/