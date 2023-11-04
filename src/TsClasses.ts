class Employee {
    private empId: number;
    private name: string;
    private dob: Date;
    private salary: number;

    //value injection
    constructor(empId: number, name: string, dob: Date, salary: number) {
        this.empId = empId;
        this.name = name;
        this.dob = dob;
        this.salary = salary;
    }

    getDetails(): string {
        return `Employee Id: ${this.empId} 
            Name: ${this.name} DOB: ${this.dob} Salary: ${this.salary}`;
    }

    setSalary(salary: number): void {
        if(salary < 0) {
            console.log('Salary cannot be negative');
        }
        this.salary = salary;
    }
    getSalary(): number {
        return this.salary;
    }
}

let e1: Employee = new Employee(1, 'John', new Date('1990-09-25'), 10000);
console.log(e1);

console.log(e1.getDetails());

// e1.salary = 100000;  //private members are not accessible outside the class
e1.setSalary(10)
console.log('salary: ',e1.getSalary());