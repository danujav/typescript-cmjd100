//void function
function printMarks(studentName: string, mark: number): void {
    //console.log(studentName + " has " + mark + " marks");

    console.log(`${studentName} has ${mark} marks`);
}

printMarks("John", 80);

//return function
function getTotal(num1: number, num2: number): number {
    return num1 + num2;
}

let total2: number = getTotal(10, 20);
console.log(`Total is ${total2}`);

//optional parameter function
function getDetails(id: string, name: string, email?: string): void {
    console.log(`id is ${id}, name is, ${name} ${email &&  ', email is ' + email}`);
}
getDetails("1", "John");
getDetails("2", "Kamal", 'kamal@gmail.com');


//default parameter function
function getRandom(): number {
    return Math.random();
}

let random:number = getRandom();
console.log(`Random number is ${random}`);

//parameter array function
function printArray(arr: number[]): void {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

let nums: number[] = [10, 20, 30, 40, 50];
printArray(nums);

//rest parameter function
function getTot(...numbers: number[]): void {
    let sum: number = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    console.log(`Sum is ${sum}`);
}

getTot(10, 20);
getTot(10, 20, 30);
getTot(10, 20, 30, 40, 50, 60);

//arrow function
let getSum = (num1: number, num2: number): number => {
    return num1 + num2;
}

console.log(getSum(10, 20));