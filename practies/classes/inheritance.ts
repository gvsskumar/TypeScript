class Department{
    private employees: string[] =[];

    constructor(private readonly id:string,public name:string){
            this.id = id;
            this.name=name;
    }
    describe(this:Department){
        console.log(`Department (${this.id}):${this.name}`)
    }
    addEmployee(emp:string){
        this.employees.push(emp);
    }
    getEmployee(){
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

class ITDepartment extends Department{
    admins: string[];
    constructor(id:string,admins:string[]){
        super(id,'IT'); 
        this.admins=admins       
    }
}

class AccountDepartment extends Department{
    constructor(id:string,private report:string[]){
        super(id,'Accounting'); 
            
    }
    addReport(text:string){
        this.report.push(text);
    }

    printReport(){
        console.log(this.report);
    }
}
const obj = new ITDepartment('d1',['Max']);
obj.describe();
obj.addEmployee("Surya");
obj.addEmployee("Satya");

obj.name = 'NEW NAME';
obj.getEmployee();

console.log(obj);

const accounting = new AccountDepartment('d2',[]);

accounting.addReport('Something went wrong...');

accounting.printReport()
