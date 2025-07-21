// The dependency injection pattern enables classes to be more modular and testable, along with being loosely coupled. 
// It does so by injecting dependencies into other classes instead of creating the dependencies inside the classes.

class Display {
    displayMsg(msg: string): void {
        console.log(msg);
    }
}

class Employee {
    private display: Display;
    private name: string;

    constructor(display: Display, name: string) {
        this.display = display;
        this.name = name;
    }

    show(): void {
        this.display.displayMsg(this.name);
    }
}

const disp = new Display();
const emp = new Employee(disp, "Paul");
emp.show();
