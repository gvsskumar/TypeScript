class Department {
    name:string;
    constructor(n:string){
        this.name =n;
    }
    describe() {
        console.log('Department '+this.name);
    }
}
const obj = new Department('Web Development');
obj.describe();