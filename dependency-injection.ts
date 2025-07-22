// The dependency injection pattern enables classes to be more modular and testable, along with being loosely coupled. 
// It does so by injecting dependencies into other classes instead of creating the dependencies inside the classes.

// 📦 Display Class: Responsible for outputting messages
class Display {
    displayMsg(msg: string): void {
        console.log(msg);
    }
}

// 👨‍💼 Employee Class: Holds employee data and delegates display responsibility
class Employee {
    // Private properties to ensure encapsulation
    private readonly display: Display;
    private readonly name: string;

    // Constructor sets dependencies and employee details
    constructor(display: Display, name: string) {
        this.display = display;
        this.name = name;
    }

    // Public method that delegates the display logic
    show(): void {
        this.display.displayMsg(this.name);
    }
}

// 🚀 Execution: Instantiate and use the classes
const disp = new Display();
const emp = new Employee(disp, "Paul");

emp.show(); // Outputs: Paul
