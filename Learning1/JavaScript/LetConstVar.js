//! Let and const decleration are hoisted 
// let and const are in the temporal dead zone for sometime 

//* Temporal Dead zone is the time between hoisted period and until the variable is assigned some value
//  jaba let a =10; ma a undefined huncha until a=10 navaye samman ko time period lai temporal zone bahnincha. Execution context ma value undefined hunu dekhi ko value assign hununjel samma ko period
console.log(b) 
let a = 10;
var b = 100;

//! Imp -> when we write let, then at execution context there is different script (object) for let and the value is stored there. Meaning let is not attached to window. if we do window.a the value is not stored
//*     -> when we write var then at execution context there is no different script it's in the same global object attached. So if we try to get the value 

 //todo SO why it shows error if we try to clg let or const because let and const are in different script(seperate memory space) not in global object and they can't be accessed 
// > let and const are hoisted. we cant use them before initialization is result of "temporal dead zone".
// -> js use diff memory than global execution context to store let and cost. which is reason behind "temporal dead zone"
// -> level of strictness ... var<<let<<const.
// -> var //no temporal dead zone, can redeclare and re-initialize, stored in GES
//     let //use TDZ, can't re-declare, can re-initialize, stored in separate memory
//     const //use TDZ, can't re-declare, can't re-initialize, stored in separate memory
// -> syntax error is similar to compile error. while type and reference error falls under run time error.
// -> syntax error ... violation of JS syntax
//     type error ...  while trying to re-initialize const variable
//     reference error ... while trying to access variable which is not there in global memory

b =10 
b  = 1