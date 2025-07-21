// Example1: Extending our simple factory example, let’s say you are hungry and you’ve decided to order food from a restaurant.
// Based on your preference, you might order a different cuisine. 
// Then, you might need to select the best restaurant based on the cuisine.
// As you can see, there is a dependency between your food and the restaurant. 
// Different restaurants are better for different cuisine.

// Example2: Let’s say you’re building a notification system that can send alerts via Email, SMS, or Push. 
// Instead of directly instantiating each notification class, you’ll use a factory to create them based on input.

interface INotification{
    sendMessage(message:string):void
}
class EmailNotification implements INotification{
    sendMessage(message: string): void {
        console.log(`📧 Sending Email: ${message}`)
    }
}
class SMSNotification implements INotification{
    sendMessage(message: string): void {
        console.log(`📲 Sending SMS: ${message}`);
    }
}

//Seperate file
class NotificationFactory{
    static create(type:string):INotification{
        switch(type.toLowerCase()){
            case 'email':
                return new EmailNotification();
            case 'sms':
                return new SMSNotification()
            default:
                throw new Error('Unsupported notification type');
        }
    }
}

//USAGE
// index.ts
//import { NotificationFactory } from './NotificationFactory';
const notifier = NotificationFactory.create('email');
notifier.sendMessage('ClosetQ Beta launch is LIVE!');