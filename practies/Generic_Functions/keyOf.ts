function extractConversion<T extends object,U extends keyof T>(obj:T,key:U){
    return obj[key];
}
console.log(extractConversion({name:'Kumar'},'name'));