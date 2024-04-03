// function a(){
//     console.log(b)
// }
// var b = 10;
// a();

// scope means where we can access some variable 

//! If a execution context is formed then a lexical environment is also formed 
//* a variable can access it's scope as well as parent of lexical environment 

function a(){
    let a = 10;
    b()
    // c()          if we call c() then it's inside other function so can't be called can come error
    function b(){
        c()
        let b = 20;
        function c(){
           console.log(a) 
        }
    }
}
a()

var b = 10;
function e() {
    f()
    function f(){
        console.log(b)
    }
}
e()
// console.log(b)     this will cause error because we are trying to access inside the function 