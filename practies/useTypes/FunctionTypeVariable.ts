function add1(n1:number,n2:number){
    return n1+n2;
}

function printResult1(num:number):void{
    console.log('Result:'+num);
}

printResult1(add1(5,12));

let combinedValues : (a:number,b:number)=>number;
combinedValues = add1;
console.log(combinedValues(8,8));