class Department{
    private employees: string[] =[];

    constructor(private id:string,public name:string){
            this.id = id;
            this.name=name;
    }
    describe(this:Department){
        console.log(`Department (${this.id}):${this.name}`)
    }
}

const obj = new Department('d1','WebDevelopment');
obj.describe();