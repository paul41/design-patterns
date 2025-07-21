//The strategy pattern is a behavioral design pattern that allows you to select an algorithm or strategy at runtime.
//Think of it like choosing a payment method on an e-commerce platform—credit card, PayPal, UPI, etc. The platform doesn't change. 
// Only the strategy (payment method) does.

interface PaymentStrategy{
    pay(amount:number):string;
}

class CreditCardPayment implements PaymentStrategy{
    pay(amount:number):string{
        return `Paid ₹${amount} using Credit Card`;
    }
}
class PayPalPayment implements PaymentStrategy{
    pay(amount:number):string{
        return `Paid ₹${amount} using Credit Card`;
    }
}
class ShoppingCart {
    private strategy:PaymentStrategy;
    constructor(strategy:PaymentStrategy){
        this.strategy = strategy;
    }
    checkout(amt:number):string{
        return this.strategy.pay(amt)
    }
    setPaymentStrategy(strategy: PaymentStrategy) {
        this.strategy = strategy;
    }
}
const cart = new ShoppingCart(new CreditCardPayment());
console.log(cart.checkout(2000)); // Paid ₹2000 using Credit Card

cart.setPaymentStrategy(new PayPalPayment());
console.log(cart.checkout(1500));