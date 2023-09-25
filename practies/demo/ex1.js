var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var DataStorage = /** @class */ (function () {
    function DataStorage() {
        this.data = [];
    }
    DataStorage.prototype.addItem = function (item) {
        this.data.push(item);
    };
    DataStorage.prototype.removeItem = function (item) {
        this.data.splice(this.data.indexOf(item), 1);
    };
    DataStorage.prototype.getItem = function () {
        return __spreadArray([], this.data, true);
    };
    return DataStorage;
}());
var stringStorage = new DataStorage;
stringStorage.addItem("Kumar");
stringStorage.addItem("Surya");
console.log(stringStorage.getItem());
stringStorage.removeItem("Kumar");
console.log(stringStorage.getItem());
// function extractConversion<T extends object,U extends keyof T>(obj:T,key:U){
//     return obj[key];
// }
// console.log(extractConversion({name:'Kumar'},'name'));
// interface Lengthly {
//     length:number
// }
// function countAndPrint<T extends Lengthly>(element:T){
//     let description = "Got no element";
//     if(element.length===1){
//         description = "Got "+element.length+" element";
//     }else if(element.length>1){
//         description = "Got "+element.length+" elements";
//     }
//     return [element,description];
// }
//console.log(countAndPrint([]));
//console.log(countAndPrint('Hi there!'));
// console.log(countAndPrint(['apple','mongo']));
// function merge<T extends object,U extends object>(objA:T,objB:U){
//     return Object.assign(objA,objB);
// }
// let res = merge({name:"Kumar"},{age:32});
// console.log(res.age);
// function merge<T,U>(objA:T,objB:U){
//     return Object.assign(objA,objB);
// }
// let res = merge<{name:string},{age:number}>({name:"Kumar"},{age:32});
// console.log(res.age);
// const names: Array<string> =[]
// const promise:Promise<string> = new Promise((reslove,reject)=>{
//      setTimeout(()=>{
//       reslove('This is Done!');
//      },2000)
// });
// promise.then((data)=>{
//   data.split(' ');
// })
// function merge(objA,objB){
//  return Object.assign(objA,objB);
// }
// const mergeObj = merge({name:"kumar"},{age:32});
// console.log(mergeObj.age);
