//The strategy pattern is a behavioral design pattern that allows you to select an algorithm or strategy at runtime.
//Think of it like choosing a payment method on an e-commerce platform—credit card, PayPal, UPI, etc. The platform doesn't change. 
// Only the strategy (payment method) does.

// 🎯 Strategy Interface: Defines the common payment behavior
interface PaymentStrategy {
    pay(amount: number): string;
}

// 💳 Concrete Strategy #1: Handles payment via Credit Card
class CreditCardPayment implements PaymentStrategy {
    pay(amount: number): string {
        return `Paid ₹${amount} using Credit Card`;
    }
}

// 💰 Concrete Strategy #2: Handles payment via PayPal
class PayPalPayment implements PaymentStrategy {
    pay(amount: number): string {
        return `Paid ₹${amount} using PayPal`;
    }
}

// 🛒 Context Class: ShoppingCart uses a payment strategy
class ShoppingCart {
    private strategy: PaymentStrategy;

    // Accepts a strategy during initialization
    constructor(strategy: PaymentStrategy) {
        this.strategy = strategy;
    }

    // Executes payment using the current strategy
    checkout(amount: number): string {
        return this.strategy.pay(amount);
    }

    // Allows switching the strategy dynamically
    setPaymentStrategy(strategy: PaymentStrategy) {
        this.strategy = strategy;
    }
}

// 🧪 Usage Example: Swap payment strategies on the fly
const cart = new ShoppingCart(new CreditCardPayment());
console.log(cart.checkout(2000)); // Outputs: Paid ₹2000 using Credit Card

cart.setPaymentStrategy(new PayPalPayment());
console.log(cart.checkout(1500)); // Outputs: Paid ₹1500 using PayPal