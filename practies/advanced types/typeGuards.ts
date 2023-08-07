//Example -1 : typeGuards using typeof
type Combine = string|number;
function add(a:Combine,b:Combine){
    if(typeof a==='string' || typeof b==='string'){  // typeGuards represents the typeof or instanceof
        return a.toString()+b.toString();
    }
  return a+b;
}
const addNumber =add(5,6);
console.log(addNumber); //11

const addString =add("Surya","Kumar");
console.log(addString); //SuryaKumar

const addMixed =add(5,"Satya");
console.log(addMixed); //5Satya
//Example -2 : typeGuards using  if in..object
type Admin = {
    name:string;
    privileges:string[];
};
type Employee = {
    name:string;
    startDate:Date;
};

type UnknowEmployee = Employee|Admin;
function printEmployeeInformation(emp:UnknowEmployee){
    console.log('Name:'+emp.name);  //Name:Satya 
    if('privileges' in emp){ // this is a typeGuards
        console.log('Privileges:'+emp.privileges); //Privileges:Add,Edit,Delete
    }
    if('startDate' in emp){
        console.log('startDate'+emp.startDate); //startDateMon Aug 07 2023 23:42:37 GMT+0530 (India Standard Time)
    }
    
}
printEmployeeInformation({name:"Satya",privileges:["Add","Edit","Delete"],startDate:new Date()})

//Example 3: typeGuards using instanceof
class Car{
    drive(){
        console.log("Driving car....");
    }
}

class Truck{
    drive(){
        console.log("Driving to Truck....");
    }

    loadCargo(amount:number){
        console.log('loadCargo Amount :'+amount);
    }
}
type vehical = Car | Truck;
const v1 = new Car();
const v2 = new Truck();
function useVehical(vehical:vehical){ // this is a typeGuard
    vehical.drive();
    if(vehical instanceof Truck){
        vehical.loadCargo(1000)
    }
    
}
useVehical(v1);
useVehical(v2);
// Excuted cmd :  tsc.cmd Watch.ts --watch (or) tsc.cmd Watch.ts -w