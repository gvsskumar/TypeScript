// Single Object Type Declaration
// const person:{
//     name:string;
//     age:number
// } = {
//     name:"Venkata Satya",
//     age:32
// }
// console.log(person.name);

// Nested Object Type Declaration

const product:{
    id:string,
    price:number,
    tags:string[],
    details:{
        title:string,
        description: string  
    } 
} = {
    id: 'abc1',
    price: 12.99,
    tags: ['great-offer', 'hot-and-new'],
    details: {
      title: 'Red Carpet',
      description: 'A great carpet - almost brand-new!'
    }
  }
  console.log(product.details.title)