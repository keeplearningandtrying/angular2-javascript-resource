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

