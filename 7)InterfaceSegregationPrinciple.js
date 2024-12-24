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

// Classes should not be forced to implement methods they do not use.

// Define interfaces through mixin-like behavior
class Printer {
  print(doc) {
    console.log(`Printing document: ${doc}`);
  }
}

class Scanner {
  scan(doc) {
    console.log(`Scanning document: ${doc}`);
  }
}

// Separate implementations
class MultiFunctionDevice {
  constructor() {
    this.printer = new Printer();
    this.scanner = new Scanner();
  }

  print(doc) {
    this.printer.print(doc);
  }

  scan(doc) {
    this.scanner.scan(doc);
  }
}

class SimplePrinter {
  constructor() {
    this.printer = new Printer();
  }

  print(doc) {
    this.printer.print(doc);
  }
}

// Usage
const device = new MultiFunctionDevice();
device.print("Report.pdf"); // Output: Printing document: Report.pdf
device.scan("Photo.png"); // Output: Scanning document: Photo.png

const printerOnly = new SimplePrinter();
printerOnly.print("Invoice.pdf"); // Output: Printing document: Invoice.pdf
