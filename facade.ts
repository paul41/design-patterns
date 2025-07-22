//The Facade Pattern is a structural design pattern that provides a simplified interface to a complex subsystem. 
// It’s like giving users one entry point that handles many behind-the-scenes tasks, without exposing the inner intricacies.

// 📁 FileLogger.ts
class FileLogger {
  logToFile(message: string): void {
    console.log(`📁 File log: ${message}`);
  }
}

// 🗄️ DbLogger.ts
class DbLogger {
  logToDB(message: string): void {
    console.log(`🗄️ DB log: ${message}`);
  }
}

// ☁️ CloudLogger.ts — New subsystem to be added
class CloudLogger {
  logToCloud(message: string): void {
    console.log(`☁️ Cloud log: ${message}`);
  }
}

// 🎯 LoggerFacade.ts — Updated Facade to integrate new logger
class LoggerFacade {
  private fileLogger = new FileLogger();
  private dbLogger = new DbLogger();
  private cloudLogger = new CloudLogger(); // New dependency

  // Unified method that delegates to all three loggers
  log(message: string): void {
    this.fileLogger.logToFile(message);
    this.dbLogger.logToDB(message);
    this.cloudLogger.logToCloud(message); // New call added
  }
}

// 🧪 Usage
const logger = new LoggerFacade();
logger.log("User signed in successfully");
