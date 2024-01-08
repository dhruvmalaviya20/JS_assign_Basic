//-----------------------  module_1 -> Question - 1  -------------------------

let alt = alert("Hello World.... Welcome to the site......");
console.log("Thanks for coming.....");


//module_1 -> Question - 02. What will be the result for these expressions ?

// 01 -> 5 > 4......

console.log("01. A = 5, B = 4");

let a = 5;
let b = 4;

if (a > b) {
    console.log("01. True, Because A is bigger then B");
}
else{
    console.log("01. False, Because A is not bigger then B");
}
//Ans : A is bigger then B.


// 02 -> "apple" > "pineapple".............................

let a1 = "apple";
let b1 = "pineapple";

if (a1 > b1) {
    console.log("02. True, Because a1 comes before b1 in alphabetical order");
}
else{
    console.log("02. False, Because a1 not comes before b1 in alphabetical order");
}
// Ans : Fals, a1 not comes before b1 in alphabetical order........................


// 03 -> "2" > "12".............................

let a3 = "2";
let b3 = "12";

if(a3 > b3){
    console.log("03. True, Because a string comparison (first char of a3 is bigger then first char of b3)");
}
else{
    console.log("03. False, Because a string comparison (first char of a3 is not bigger then first char of b3)");
}
// Ans : True, Because a string comparison (first char of a3 is bigger then first char of b3 in unicode order.........


//04 ->  undefined == null............................

let a4 = undefined;
let b4 = null;

if(a4 == b4){
    console.log("04. True, Because undefined and null is loosely equal('==' operator can't comparison with datatype.)");
}
else{
    console.log("04. False, Because undefined and null is not loosely equal('==' operator can't comparison with datatype.)");
}
//Ans : True, Because undefined and null is loosely equal('==' operator can't comparison with datatype.)


//05 ->  undefined === null............................

let a5 = undefined;
let b5 = null;

if (a5 === b5){
    console.log("05. True, Because undefined and null is strictly equal('===' operator can also comparison with datatype.)");
}
else{
    console.log("05. False, Because undefined and null is not strictly equal('===' operator can also comparison with datatype.)");
}
//Ans : Fals, Because undefined and null is not strictly equal('===' operator can also comparison with datatype.)


//06 ->  null == "\n0\n"............................

let a6 = null;
let b6 = "\n0\n";

if (a6 == b6) {
    console.log("06. True, Because a6 is equal to b6");
}
else {
    console.log("06. False, Because null is not equal to any strings.......");

}
//Ans : False, Because null is not equal to any strings.


//07 ->  null === +"\n0\n"............................

let a7 = null;
let b7 = +"\n0\n";

if (a7 === +"\n0\n") {
    console.log("True, Because values are equal.");
}
else{
    console.log("False, Because there are different types of values.");
}
//Ans : False, Because there are different types of values.


//module_1 -> Question - 03. Will alert be shown?  //->   if ("0") { alert( 'Hello'); }

if("0"){
    alert("Hello");
}
// Ans : alert be shown -> "Hello"


//module_1 -> Question - 04. What is the code below going to output ?  //->   alert( null || 2 || undefined )

alert(null || 2 || undefined);

// Ans : 2.


//module_1 -> Question - 05. The following function returns true if the parameter age is greater than 18. Otherwise it asks for a confirmation and returns its result: 

let age = prompt("Enter the number of age : ")

if(age > 18) {
    console.log("age : ", age);
}
else{
    console.log(confirm("did parents allow you ?"));
}

// Ans : if age > 18 than print age otherwise it ask for confirmation.


//module_1 -> Question - 06. Replace Function Expressions with arrow functions in the code below:

function ask(question, yes, no) {

    if (confirm(question)) {
        yes();

    }
    else{

        no();

    }
    
};

ask(
    "Do you agree ?",
    () => alert("You agreed."),
    () => alert("You cancled the execution.")
);
