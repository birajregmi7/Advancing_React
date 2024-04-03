a() // here during memory creation a is treated as a fucntion 
b() // here during memory creating in execution context b is taken as a variable so it logs: TypeError: b is not a funciton 
//function statement
function a(){
    console.log('a called')
}

//todo function expression
//-> here we pass value of funciton to a variable 
var b = function(){
    console.log('b called')
}

//todo What is the difference between function statement and funciton expression 
//-> Main difference is hoisting


//todo Anonymous Funcitons ->Anoymous function Are used when the function is used like value or like a variabel. We can use to assign fucntion to any variable 
// function(){

// }

//todo Named Function Expression 
    var c = function xyz ( ){
        console.log('named funciton is called')
    }

c()
// xyz() //we can't use like this but if we want to use this function inside then it will work


//todo First Class Funciton 
//! -> Passing another funciton in the funciton as an argument
//*-> First calss citizens === First class Funciton 

