class Department {
    name:string;
    constructor(n:string){
        this.name =n;
    }
    describe(this:Department) {
        console.log('Department '+this.name);
    }
}
const obj = new Department('Web Development');
obj.describe();
const objCopy ={name:"SEO",describe:obj.describe};
objCopy.describe();
