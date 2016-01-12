//function statement
function greet(){
    console.log('hej');
}
//invoked
greet();

//vi giver en parameter(en funktion) med (options)
function printGreet(options){
    //her invoker vi vores parameter
    options();
}

//det betyder at vi nu kan give vores printGreet 
//en funktion med i stedet for vores parameter
printGreet(greet);

//function expression
var greetMe = function(){
    console.log('Heej Patrick! :)')
}
greetMe();
//still first-class!! derfor:

printGreet(greetMe);

//function expression on the fly
//vi kan give vores funktion en funktion med, på mange forskellige måder
//nærmest som det passer os
printGreet(function(){
    console.log('hej igen');
});

//Require something
// var someName = require('../pathToFile/FileName'); 
// and then run it somewhere else
// someName();
//export something
// module.exports = "Bonjour";