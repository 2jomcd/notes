// var methods = {name:"",
//              trunk: 1,
//              legs: 4,
//              weight: "heavy",
//              tusks: 2,
//              size: "huge",
//              age: "adult",
//              stomp: function() {
//                  return "Boom! Boom! goes " + this.name;}
//              }

// var elephant = Object.create(methods);

// var elemake = function(name) {
//     elephant = Object.create(methods);
//     elephant.name = name; 
//     return elephant
// }

// var elephantJohn = elemake("John");
// elephantJohn;
// //elephantJohn.weight;
// //elephantJohn.tusks;

// elephantJohn.legs


elephantJohn.stomp()


var Elephant = function(name) {
    this.name = name;  
}

Elephant.prototype = {
             trunk: 1,
             legs: 4,
             weight: "heavy",
             tusks: 2,
             size: "huge",
             age: "adult",
             stomp: function() {
                 return "Boom! Boom! goes " + this.name;}
             }
             
elephantTom = new Elephant("Tom");

elephantTom.stomp();
