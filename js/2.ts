var scope = {state: "IN", startDate: "1900-01-01", endDAte: "9999-12-31"};
var state = "IN";
var date = "2017-02-28"; 

//function testFunction ( a = {state: "IN", startDate: "1900-01-01", endDate: "9999-12-31"}) {
function testFunction ( a = scope ) { 
    if (a.state == state && new Date(date) > new Date (a.startDate) ) {
        console.log(a.state);
    } else {
        return;
    }
};

testFunction();

testFunction("hello");

