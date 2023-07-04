// Union type support multiple like `number|string`
function combined(input1:number|string,input2:number|string){
    let result;
    if(typeof input1==='number' && typeof input2==='number'){
        result = input1+input2;
    }else{
        result = input1.toString() + input2.toString();
    }
    return result;
}
const combinedAge = combined(29,32);
console.log(combinedAge);

const combinedNames = combined('Venkata','Satya');
console.log(combinedNames);