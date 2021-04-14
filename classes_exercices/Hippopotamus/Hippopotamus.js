/* Manon SEBAOUN 
* Exercice 1 - cours algorithmie et JS avancé
*/

class Hippopotamus {
  constructor(name, weight, tusksSize){
    this.name = name;
    this.weight = weight; // g
    this.tusksSize = tusksSize; // cm
  }

   // Display infos about the hippopotamus
  infos() {
    console.log(`This hippopotamus is ${this.name}, it weights ${this.weight}g and its tusks are ${this.tusksSize}cm in length.`);
  }

  // The hippopotamus loses 300g
  swim() {
    this.weight -= 300;
  }

  // The hippopotamus gains 1kg
  eat() {
    // 1kg = 1000g
    this.weight += 1000;
  }

  // The hippopotamus with the longest tusks wins
  fight(hippopotamus) {
    if (this.tusksSize > hippopotamus.tusksSize) {
      console.log(this.name + " is the winner!");
    }
    else {
      console.log(hippopotamus.name + " is the winner!");
    }
  }

  cycleOfLife() {
    // 21 days = 3 weeks
    for(let days=1 ; days < 22 ; days++) {
      // The cycle is executed once per hour for 15 hours
      for (let hours=1 ; hours<16 ; hours++) {
        // The hippopotamus eats twice per hour
        for (let i=0 ; i<2 ; i++) {
          this.eat();
        }
        // and swims three times per hour
        for (let j=0 ; j<3 ; j++) {
          this.swim();
        }
      }
      console.log(`Day ${days}:`);
      this.infos();
    }
  }
}

// Export class
module.exports.Hippopotamus = Hippopotamus;