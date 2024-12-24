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

// A class should have only one reason to change, i.e., it should perform only one responsibility.

// Class for handling user information
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  getUserInfo() {
    return `Name: ${this.name}, Email: ${this.email}`;
  }
}

// Class for email notifications
class EmailService {
  sendEmail(email, message) {
    console.log(`Email sent to ${email} with message: ${message}`);
  }
}

// Use classes separately
const user = new User("John Doe", "john@example.com");
const emailService = new EmailService();

console.log(user.getUserInfo()); // Output: Name: John Doe, Email: john@example.com
emailService.sendEmail(user.email, "Welcome to our platform!");
// Output: Email sent to john@example.com with message: Welcome to our platform!
