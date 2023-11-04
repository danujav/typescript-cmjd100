import {Animal} from "./Exercise1";
import {Student} from "./Exercise1";

class Dog implements Animal {
    name: string;
    type: string;

    eat(): void {
    }
}

let st1: Student = new Student();