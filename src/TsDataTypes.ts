//---------------------------------------------

//string type
let fName: string = "John";
console.log(fName);

//type-safety
// fName = 20; //error

let newName: string = fName.toUpperCase();
console.log('new name: ',newName);

//---------------------------------------------


//number type
let mark: number = 100;
mark = 100.5;

console.log('mark: ',mark);
//type safety
// mark = 'Kamal'; //error

//---------------------------------------------

//boolean type
let isValid: boolean = 10 > 5;
console.log('isValid: ',isValid);

isValid = false;
console.log('isValid: ',isValid);

//type-safety
// isValid = 10;  //error

//---------------------------------------------

//array type
let marks: number[];
marks = [75, 74, 98, 50, 60];
console.log('marks: ',marks);

marks[0] = 10;
console.log('marks: ',marks);

let total: number = 0;
for (let i = 0; i < marks.length; i++) {
    total += marks[i];
}
console.log('total: ',total);

//---------------------------------------------

//enum type
enum Color { RED, GREEN, BLUE };

let color: Color = 1;
console.log('color: ',color);

switch (color) {
    case Color.RED:
        console.log('You selected Red Color');
        break;
    case Color.GREEN:
        console.log('You selected Green Color');
        break;
    case Color.BLUE:
        console.log('You selected Blue Color');
        break;
    default:
        console.log('Invalid Color');
        break;

}

//---------------------------------------------

//any type
let randomData: any;
randomData = 10;

console.log('randomData: ',randomData);

randomData = 'Kamal';
console.log('randomData: ',randomData);

randomData = true;
console.log('randomData: ',randomData);