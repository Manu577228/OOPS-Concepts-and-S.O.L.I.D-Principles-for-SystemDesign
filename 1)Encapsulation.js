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

// Encapsulation means bundling data (properties) and methods (functions) inside an object while restricting direct access to some of them.

// Define a Car class
class Car {
  constructor(brand, model) {
    this.brand = brand; // Public property
    this.model = model; // Public property
    let speed = 0; // Private property

    // Private method
    this.getSpeed = () => speed;
    this.setSpeed = (value) => (speed = value > 0 ? value : 0);
  }

  accelerate() {
    this.setSpeed(this.getSpeed() + 10); // Access private speed
    console.log(
      `${this.brand} ${this.model} is now going at ${this.getSpeed()} km/h.`
    );
  }

  brake() {
    this.setSpeed(this.getSpeed() - 10); // Reduce private speed
    console.log(
      `${this.brand} ${this.model} slowed down to ${this.getSpeed()} km/h.`
    );
  }
}

// Create an object of Car
const myCar = new Car("Tesla", "Model 3");
myCar.accelerate(); // Output: Tesla Model 3 is now going at 10 km/h.
myCar.brake(); // Output: Tesla Model 3 slowed down to 0 km/h.
