// Enum is used to create custom type structure like your own type validation
enum Role {ADMIN="ADMIN",READ_ONLY=100,AUTHOR="AUTHOR"};

const user:{
    name:string;
    age:number;
    role
} = {
    name:"Surya",
    age:32,
    role:Role.ADMIN
}