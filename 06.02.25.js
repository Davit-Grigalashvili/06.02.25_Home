//
// function sayHi() {
//
//     let sayHi = "hellfsdefo"
//     console.log( sayHi);
//
// }
// sayHi()
// sayHi()
// sayHi()

//
// let message = "bugaga";
//
// function sayHi() {
//
//     let message = 55643
//     console.log( message );
// }
// sayHi()


// function sayHi() {
//     console.log("hello" );
// }
//
// console.log( sayHi );


// function sayHi() {   // (1) create
//     console.log( "Hello" );
//     console.log(223311)
// }
//
// let func = sayHi;    // (2) copy
//
// func(); // Hello     // (3) run the copy (it works)!
// sayHi(); // Hello

// let message = "username"
//
// function sayHi() {   // (1) create
//     console.log( "Hello" );
//     console.log(223311);
//     console.log(message)
// }
//
// let func = sayHi;    // (2) copy
//
// func(); // Hello     // (3) run the copy (it works)!
// sayHi(); // Hello
// console.log(message)

// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
// }
//
// function showOk() {
//     console.log( "You agreed." );
// }
//
// function showCancel() {
//     console.log( "You canceled the execution." );
// }
//
//
// console.log("Do you agree?", showOk, showCancel);
//
// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
// }
//
// console.log(
//     "Do you agree?",
//     function ask() {
//         console.log("You agreed."); },
//     function ask() {
//         console.log("You canceled the execution."); }
// );
//
// let sayHi= "Peter"; // Hello, John
//
// function sayHi(name) {
//     console.log( `Hello, ${name}` );
//     let sayHi = "pavle";
//     console.log(`Hello, ${name}`)
// }

// let age = prompt("What is your age?", 19);
//
//
// if (age < 18) {
//
//     function welcome() {
//         console.log("Hello!");
//     }
//
// } else {
//
//     function welcome() {
//         console.log("Greetings!");
//     }
//
// }
//
// welcome();
//
// let age = 19;
//
//
// if (age < 18) {
//
//     function welcome() {
//         console.log("Hello!");
//     }
//
// } else {
//
//     function welcome() {
//         console.log("Greetings!");
//     }
//
// }
//
// welcome();

// let age = 16; // take 16 as an example
//
// if (age < 18) {
//     // welcome();               // \   (runs)
//                              //  |
//     function welcome() {     //  |
//         console.log("Hello!");       //  |  Function Declaration is available
//     }                        //  |  everywhere in the block where it's declared
//                              //  |
//     // welcome();               // /   (runs)
//
// } else {
//
//     function welcome() {
//         console.log("Greetings!");
//     }
// }
// welcome()
//
// let age = 10;
//
// let welcome;
//
// if (age < 18) {
//
//     welcome = function() {
//         console.log("Hello!");
//     };
//
// } else {
//
//     welcome = function() {
//         console.log("Greetings!");
//     };
//
// }
//
// welcome(); // ok now

// let age = 1;
//
// let welcome = (age < 18) ?
//     function() {
//         console.log("Hello!"); } :
//     function() {
//         console.log("Greetings!"); };
//
// welcome(); // ok now
//
// let age = 19;
//
// let welcome = (age < 18) ?
//     function() {
//         console.log("Hello!"); } :
//     function() {
//         console.log("Greetings!"); };
//
// welcome(); // ok now

// let now = getDate();
// console.log( now ); // shows current date/time


// const currentDate=new Date();
// console.log(currentDate);
// // console.log(currentDate.getDay())
// // console.log(currentDate.getFullYear())
// // console.log(currentDate.setMilliseconds())
// // console.log(currentDate.setUTCMonth())
// console.log(currentDate.getTimezoneOffset())


