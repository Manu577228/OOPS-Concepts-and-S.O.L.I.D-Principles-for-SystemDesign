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

// Inheritance allows one class to extend another, inheriting its properties and methods.
// Polymorphism allows overriding or modifying inherited methods.

// Parent class
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

// Child class inheriting Animal
class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}

// Objects
const genericAnimal = new Animal("Generic Animal");
const dog = new Dog("Buddy");

// Polymorphism
genericAnimal.speak(); // Output: Generic Animal makes a sound.
dog.speak(); // Output: Buddy barks.
