// A classic example of an adapter pattern will be a differently shaped power socket. 
// Sometimes, the socket and device plug doesn’t fit. To make sure it works, we will use an adapter. 
// That’s exactly what we are going to do in the adapter pattern.
// It is a process of wrapping the incompatible object in an adapter to make it compatible with another class.

// 🎯 Target Interface: Common structure used across the application
interface IError {
  serialize(): string;
}

// ✅ Legacy Implementation (originally used throughout the app)
class CustomError implements IError {
  constructor(private message: string) {}

  serialize(): string {
    return this.message;
  }
}

// 🆕 Updated Error Class with a new format
class NewCustomError {
  constructor(public message: string) {}

  withInfo() {
    return { message: this.message };
  }
}

// 🔌 Adapter: Makes NewCustomError compatible with the IError interface
class ErrorAdapter implements IError {
  private adaptee: NewCustomError;

  constructor(message: string) {
    this.adaptee = new NewCustomError(message);
  }

  serialize(): string {
    return this.adaptee.withInfo().message;
  }
}

// 🧪 Usage
const error: IError = new ErrorAdapter("Database connection failed!");
console.log(error.serialize()); // Outputs: "Database connection failed!"
