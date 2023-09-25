






function merge<T extends object,U extends object>(objA:T,objB:U){
    return Object.assign(objA,objB);
}
let res = merge({name:"Kumar"},{age:32});
console.log(res.age);


function merge<T,U>(objA:T,objB:U){
    return Object.assign(objA,objB);
}
let res = merge<{name:string},{age:number}>({name:"Kumar"},{age:32});
console.log(res.age);

const names: Array<string> =[]

const promise:Promise<string> = new Promise((reslove,reject)=>{
     setTimeout(()=>{
      reslove('This is Done!');
     },2000)
});

promise.then((data)=>{
  data.split(' ');
})

function merge(objA,objB){
 return Object.assign(objA,objB);
}
const mergeObj = merge({name:"kumar"},{age:32});
console.log(mergeObj.age);