function Programmer(name, company, expertise) {
   this.name = name;
   this.company = company;
   this.expertise = expertise;

   this.writeCode = function() {
      console.log("Writing some public static thing..");
   }

   this.makeSkypeCall = function() {
      console.log("Making skype call..");
   }

   this.doSalsa = function() {
      console.log("I'm a programmer, I can only do Gangnam style..");
   }

   this.canWriteJavaScript = function() {
      return expertise === "JavaScript";
   }
}

var javaProgrammer = new Programmer("Mohit Srivastava", "Infosys", "Java");
var dotnetProgrammer =  new Programmer("Atul Mishra", "Prowareness", ".NET");

javaProgrammer.doSalsa();
dotnetProgrammer.makeSkypeCall();



// 


function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2));  // 7
console.log(add10(2)); // 12


//


var counter = (function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  };   
})();

console.log(counter.value()); // logs 0
counter.increment();
counter.increment();
console.log(counter.value()); // logs 2
counter.decrement();
console.log(counter.value()); // logs 1



