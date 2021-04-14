/* Manon SEBAOUN 
* Exercice 2 - cours algorithmie et JS avancé
*/

class Point {
  constructor(x, y) {
      this.x = x;
      this.y = y;
  }

  // getters & setters
  getX() {
    return this.x;
  }

  setX(val) {
    this.x = val;
  }

  getY() {
    return this.y;
  }

  setY(val) {
    this.y = val;
  }

  // Display infos about the point
  infos() {
    console.log(`The coordinates of the point are x: ${this.getX()} and y: ${this.getY()}`);
  }
}

// Export class
module.exports.Point = Point;