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

// Objects of a superclass should be replaceable with objects of its subclasses without altering the behavior of the program.

// Base class
class Shape {
  getArea() {
    throw new Error("Method not implemented");
  }
}

// Subclass for Rectangle
class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

// Subclass for Square
class Square extends Shape {
  constructor(side) {
    super();
    this.side = side;
  }

  getArea() {
    return this.side * this.side;
  }
}

// Function using base class
function printArea(shape) {
  console.log(`Area: ${shape.getArea()}`);
}

// Using subclasses
const rectangle = new Rectangle(4, 5);
const square = new Square(3);

printArea(rectangle); // Output: Area: 20
printArea(square); // Output: Area: 9
