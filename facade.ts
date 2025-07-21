//The Facade Pattern is a structural design pattern that provides a simplified interface to a complex subsystem. 
// It’s like giving users one entry point that handles many behind-the-scenes tasks, without exposing the inner intricacies.

// FileLogger.ts
class FileLogger {
  logToFile(message: string): void {
    console.log(`📁 File log: ${message}`);
  }
}

//DB Logger
class DbLogger{
    logToDB(message:string):void {
        console.log(`🗄️ DB log: ${message}`)
    }
}

//LoggerFacade.ts
class LoggerFacade{
    private fileLogger = new FileLogger();
    private dbLogger = new DbLogger();

    log(message:string):void{
        this.fileLogger.logToFile(message);
        this.dbLogger.logToDB(message);
    }
}
//Usage
const logger = new LoggerFacade();
logger.log("User signed in successfully");