interface Human {
    id: number;
    name: string;
    age: number;

    talk(): void;
}

//step 1
let boy: Human = {
    id: 1,
    name: "John",
    age: 20,

    talk: () => {
        console.log("Boy is saying Hello!");
    }
}

console.log(boy);

class Girl implements Human {
    id: number;
    name: string;
    age: number;

    constructor(id: number, name: string, age: number) {
        this.id = id;
        this.name = name;
        this.age = age;
    }

    talk(): void {
    }
}

let girl: Human = new Girl(2, "Mary", 20);
console.log(girl);