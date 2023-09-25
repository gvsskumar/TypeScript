interface Person {
    name:string;
    age:number;
    greet(prases:string):void;
}
let user:Person;
user ={
    name:"Kumar",
    age:32,
    greet(prases){
        console.log(prases+' '+this.name);
    }
}
user.greet("Hi thire")