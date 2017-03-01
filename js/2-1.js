var scope = {state: "IN", startDate: "1900-01-01", endDAte: "9999-12-31"};
var state = "IN";
var date = "2017-02-28"; 


function testFunction ( a = scope ) { 
    if (a.state == state && new Date(date) > new Date (a.startDate) && new Date(date) < new Date(a.endDAte) ) {
        console.log(a.state);
    } else {
        return;
    }
};

testFunction();

function test() {
    try {    
        var fnName = "myFunction()";
        var fn = new Function(fnName);
        fn();
      } catch (err) {
        console.log("error:"+err.message);
      }
  }

  function myFunction() {
    console.log('Executing myFunction()');
  }

  test();


var customObject = {
  customFunction: function(param){
    console.log(param + " passed into customFunction called")
  }
};

customObject['customFunction']("value");
