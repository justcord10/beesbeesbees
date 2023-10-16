var Bee = function() {

  Grub.call(this); //not needed since a grub is not created with an input argument
  this.age = 5;
  this.color = 'yellow';
  this.job = 'keep on growing';
};

Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Bee;

