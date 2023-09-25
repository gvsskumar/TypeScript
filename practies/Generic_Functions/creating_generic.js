function merge(objA, objB) {
    return Object.assign(objA, objB);
}
var mergeObj = merge({ name: 'Surya' }, { age: 32 });
console.log(mergeObj.name);
