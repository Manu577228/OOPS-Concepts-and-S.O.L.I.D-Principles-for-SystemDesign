/* -------------------------------------------------------- */
/*   ( The Authentic JS CodeBuff )
 ___ _                      _              _ 
 | _ ) |_  __ _ _ _ __ _ __| |_ __ ____ _ (_)
 | _ \ ' \/ _` | '_/ _` / _` \ V  V / _` || |
 |___/_||_\__,_|_| \__,_\__,_|\_/\_/\__,_|/ |
                                        |__/ 
 */
/* ---------------------------------------------------------   */
/*    Youtube: https://youtube.com/@code-with-Bharadwaj        */
/*    Github :  https://github.com/Manu577228                  */
/* ----------------------------------------------------------- */

// A class should be open for extension but closed for modification.

// Payment processor (Base class)
class PaymentProcessor {
  pay(amount) {
    console.log(`Paying $${amount}`);
  }
}

// Extension for PayPal
class PayPalProcessor extends PaymentProcessor {
  pay(amount) {
    console.log(`Processing PayPal payment of $${amount}`);
  }
}

// Extension for Credit Card
class CreditCardProcessor extends PaymentProcessor {
  pay(amount) {
    console.log(`Processing Credit Card payment of $${amount}`);
  }
}

// Usage
const paypal = new PayPalProcessor();
const creditCard = new CreditCardProcessor();

paypal.pay(100); // Output: Processing PayPal payment of $100
creditCard.pay(200); // Output: Processing Credit Card payment of $200
