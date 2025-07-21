// A classic example of an adapter pattern will be a differently shaped power socket. 
// Sometimes, the socket and device plug doesn’t fit. To make sure it works, we will use an adapter. 
// That’s exactly what we are going to do in the adapter pattern.
// It is a process of wrapping the incompatible object in an adapter to make it compatible with another class.
interface IError{
    serialize():string;
}
class CustomError implements IError{
    message: string;
    constructor(message:string){
        this.message = message;
    }
    serialize(): string {
        return(this.message)
    }
}

// Now, we are using this CustomError class across our application. 
// After some time, we need to change the method in the class due to some reason.
export default class NewCustomError{

    message : string
    
    constructor(message : string){
        this.message = message    
    }

    withInfo() {
        return { message : this.message } 
    }
}

class ErrorAdapter implements IError{
    message:string;
    constructor(message:string){
        this.message = message
    }
    serialize(): string {
        const e = new NewCustomError(this.message).withInfo()
        return e.message
    }
};