type Combineble = number|string;
type CombinebleDescriptor = 'as-number'|'as-text';

function Combine(input1:Combineble,input2:Combineble,resultConversion:CombinebleDescriptor){
    let result;
    if(typeof input1==="number" && typeof input2==="number"|| resultConversion==='as-number'){
        return +input1 + +input2;
    }else{
        return input1.toString()+input2.toString();
    }
    
}
const CombineAge = Combine(5,2.8,'as-number');
console.log(CombineAge)
const CombineStringAge = Combine('5','2.8','as-text');
console.log(CombineStringAge)
const CombineNames = Combine("Venkata","Satya",'as-text');
console.log(CombineNames)