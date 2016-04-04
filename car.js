var Car = function() {
  // this is a private variable
  var speed = 10;

  // these are public methods
  this.accelerate = function(change) {
    speed += change;
  };

  this.decelerate = function() {
    speed -= 5;
  };

  this.getSpeed = function() {
    return speed;
  };
};

var car = new Car();
var speed = car.getSpeed()
console.log(speed);  // 10
speed += 5;
console.log(speed);  // 15
car.accelerate(5);
console.log(car.getSpeed()); //15
var truck = car;
console.log(truck === car); // true
