/* Manon SEBAOUN
* Test classes (Hippopotamus, Point, Circle)
*/

const hippoClass = require('./Hippopotamus/Hippopotamus');
const pointClass = require('./Point/Point');
const circleClass = require('./Circle/Circle');

// Class Hippopotamus
console.log(`
**** TEST CLASS HIPPOPOTAMUS ****
`);
let hippo = new hippoClass.Hippopotamus("Bernard", 1600000, 40);
let hippoTwo = new hippoClass.Hippopotamus("Michel", 1800000, 30);

hippo.fight(hippoTwo);
console.log("Cycle de vie de Bernard");
hippo.cycleOfLife();

// Class Point
console.log(`
**** TEST CLASS POINT ****
`);
let point1 = new pointClass.Point(1, 2);
point1.infos();
point1.setX(3);
console.log("x is set to 3");
point1.infos();

// Class Circle
console.log(`
**** TEST CLASS CIRCLE ****
`);
let point2 = new pointClass.Point(2, 3);
let circle = new circleClass.Circle(point2, 4);
circle.infos();
console.log(`The area of the circle is ${circle.area()}cm`);

// this point is not in the circle
let point3 = new pointClass.Point(5, 9);
console.log(circle.containsPoint(point3));