// Create one function with zero parameter having a console statement;
// Create one function which takes two values as a parameter and print the sum of them as "Sum of 3, 4 is 7"
// Create one function which takes three parameter as first name and last name and age and return the statement as "A is 99 years old"
// Create one arrow function
// Print output: 
var a = 21;
var girl = => {
    console.log(a);
    var a = 20;
};
girl ();


// Print output: 
var b = 21;
girl ();
console.log(b)
function girl() {
    console.log(b);
    var b = 20;
};


// Print output

var c = 21;
p();
q();
console.log(p);
function q () {
    
    var c = 20;
console.log(c);
};

function q () {
    
    var c = 40;
console.log(c);
};



// Print output

var d = 21;
r();
s();
console.log(r);
function r () {
    
   d = 20;
  console.log(d);
};
function s () {
    
    d = 40;
   console.log(d);
};



// Print output

var x = 21;
y();
z();
console.log(x);
x = function() {
    
   x = 20;
  console.log(x);
};
z = function() {
    
    x = 40;
   console.log(x);
};
