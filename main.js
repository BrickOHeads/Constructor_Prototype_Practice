//###################################################################
//        __
//   ____/ /___  ____ ______
//  / __  / __ \/ __ `/ ___/
// / /_/ / /_/ / /_/ (__  )
// \__,_/\____/\__, /____/
//            /____/

// Dog Constructor & Prototype
function Dog (name, status, color, hungry, owner) {
  this.name = name;
  this.status = status;
  this.color = color;
  this.hungry = hungry;
  this.owner = owner;
}


// Instances of Dog
// Needed: sadie, moonshine, atticus
var sadie = new Dog("sadie", "normal", "black", false, Human.mason);
var moonshine = new Dog("moonshine", "normal", null, true, Human.julia);
var atticus = new Dog ("atticus")

//     __
//    / /_  __  ______ ___  ____ _____  _____
//   / __ \/ / / / __ `__ \/ __ `/ __ \/ ___/
//  / / / / /_/ / / / / / / /_/ / / / (__  )
// /_/ /_/\__,_/_/ /_/ /_/\__,_/_/ /_/____/

// Human Constructor & Prototype
var mason = new Human(false);
var julia = new Human(true);

function Human (cool) {
    this.cool = cool;
  this.pet = function (dog){
        return dog.status = "happy"
      };
  this.feed = function(dog){
     return dog.hungry = false
   };

}
// this.cool = cool
