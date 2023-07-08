class Department{
   public name:string;
   private employees:string[] = []
    constructor(n: string){
        this.name = n;
    }

    describe(this:Department){
        console.log('Department:'+this.name);
    }

    addEmployee(emp:string){
        this.employees.push(emp);
    }
    getEmployee(){
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
const accounting = new Department('Accounting');
accounting.addEmployee("Surya");
accounting.addEmployee("Satya");

accounting.describe();
accounting.getEmployee();