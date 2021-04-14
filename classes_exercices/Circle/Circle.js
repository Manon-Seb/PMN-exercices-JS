/* Manon SEBAOUN 
* Exercice 3 - cours algorithmie et JS avancé
*/

class Circle {
  constructor(point, radius) {
    this.point = point;
    this.radius = radius;
  }


  // Display infos about the circle and its point
  infos() {
    console.log(`The circle has a radius of ${this.radius}cm and the coordinates of the point are (${this.point.getX()};${this.point.getY()})`);
  }

  // Calculation of the area of the circle
  area() {
    return Math.round(Math.PI*2*this.radius);
  }

  // Determine if p is in the circle
  containsPoint(p) {
    const diffX = this.point.getX() - p.getX();
    const diffY = this.point.getY() - p.getY();
    const length = Math.sqrt((diffX*diffX) + (diffY*diffY));

    if(length >= 0 && length <= this.radius) {
      return true;
    }
    else {
      return false;
    }
  }
}

// Export class
module.exports.Circle = Circle;