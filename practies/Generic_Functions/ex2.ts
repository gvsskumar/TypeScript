interface Lengthly {
    length:number
}
function countAndPrint<T extends Lengthly>(element:T){
    let description = "Got no element";
    if(element.length===1){
        description = "Got "+element.length+" element";
    }else if(element.length>1){
        description = "Got "+element.length+" elements";
    }
    return [element,description];

}
console.log(countAndPrint([]));
console.log(countAndPrint('Hi there!'));
console.log(countAndPrint(['apple','mongo']));