//create a new varibale type/constructor called dog
// var Dog = function(name){
//     this.name = name;
//     this.legs = 4;
//     this.bark = function(){
//       return 'Woof!'
//     }
// }
//
// var ray = new Dog('Raymond'); //this is an instance of dog
//
// console.log('ray used to have ' + ray.legs + ' legs');
//
// ray.legs = 3;
// console.log('ray now has ' + ray.legs + ' legs');
//
// console.log(ray.bark())
//
//
//
// var Motorcycle = function(name){
//   this.wheels = 2;
//   this.engine = 350;
//   this.speed = 60;
//   this.noise = function(){
//     var brap = [];
//     for(var i = 0; i<name.length; i++) {
//       brap.push('a');
//     }
//     brap = brap.join('');
//     return 'br' + brap + 'p!'
//   }
//   this.speedChange = function() {
//     if(this.engine > 100 && this.engine < 250){
//       this.speed -= 15;
//     }
//     else if(this.engine > 250 && this.engine < 650){
//     this.speed += 25;
//     }
//     else {this.speed += 60;}
//
//   }
// }

var Motorcycle = function(name){
    this.wheels = 2;
    this.engine = 350;
    this.speed = 60;
    this.name = name
}

Motorcycle.prototype.noise = function() {
  var brap = [];
  for(var i = 0; i<this.name.length; i++) {
    brap.push('a');
  }
  brap = brap.join('');
  return 'br' + brap + 'p!'
}

Motorcycle.prototype.speedChange = function() {
  if(this.engine > 100 && this.engine < 250){
    this.speed -= 15;
  }
  else if(this.engine > 250 && this.engine < 650){
  this.speed += 25;
  }
  else {this.speed += 60;}
}


var betty = new Motorcycle('triumph');

console.log (betty.noise())
betty.engine = 200;
betty.speedChange();
console.log (betty.speed)





//
// var Mug = function(color) {
//   this.color = color;
//   this.fullness = 50;
//   this.contents = 'tea';
//   this.drink = function() {
//     this.fullness -= 10;
//   }
// }
//
// var valMug = new Mug('white');
// console.log(valMug.fullness);
