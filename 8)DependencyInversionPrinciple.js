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

// High-level modules should not depend on low-level modules. Both should depend on abstractions.

// Abstraction for sending messages
class MessageSender {
  sendMessage(receiver, message) {
    throw new Error("Method not implemented");
  }
}

// Email sender
class EmailSender extends MessageSender {
  sendMessage(receiver, message) {
    console.log(`Sending Email to ${receiver}: ${message}`);
  }
}

// SMS sender
class SmsSender extends MessageSender {
  sendMessage(receiver, message) {
    console.log(`Sending SMS to ${receiver}: ${message}`);
  }
}

// High-level module
class Notification {
  constructor(sender) {
    this.sender = sender; // Inject dependency
  }

  notify(receiver, message) {
    this.sender.sendMessage(receiver, message);
  }
}

// Usage
const emailNotification = new Notification(new EmailSender());
const smsNotification = new Notification(new SmsSender());

emailNotification.notify("john@example.com", "Hello John!"); // Output: Sending Email to john@example.com: Hello John!
smsNotification.notify("+1234567890", "Hello!"); // Output: Sending SMS to +1234567890: Hello!
