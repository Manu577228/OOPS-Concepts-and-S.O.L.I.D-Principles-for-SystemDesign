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

// Abstraction is about hiding implementation details and showing only the essential features of an object.

// Abstract class (not directly instantiated)
class Shape {
  constructor(name) {
    this.name = name;
  }

  // Abstract method (to be overridden)
  calculateArea() {
    throw new Error("Method 'calculateArea()' must be implemented.");
  }

  display() {
    console.log(`The area of the ${this.name} is ${this.calculateArea()}`);
  }
}

// Derived class for Circle
class Circle extends Shape {
  constructor(radius) {
    super("Circle");
    this.radius = radius;
  }

  calculateArea() {
    return Math.PI * this.radius * this.radius;
  }
}

// Derived class for Rectangle
class Rectangle extends Shape {
  constructor(width, height) {
    super("Rectangle");
    this.width = width;
    this.height = height;
  }

  calculateArea() {
    return this.width * this.height;
  }
}

// Usage
const circle = new Circle(5);
circle.display(); // Output: The area of the Circle is 78.53981633974483

const rectangle = new Rectangle(4, 6);
rectangle.display(); // Output: The area of the Rectangle is 24
