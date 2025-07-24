// Using Var
var a = 10;
var a = 20; 
a = 30;    

if (true) {
  var a = 40; 
}
console.log(a); 

//Using Let
let b = 10;
b = 20;       
if (true) {
  let b = 30; 
  console.log(b); 
}
console.log(b);

//using const
const c = 10;
if (true) {
  const c = 40; 
  console.log(c); 
}
console.log(c);