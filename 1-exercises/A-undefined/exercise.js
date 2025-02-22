/*
    By now, you would have already seen "undefined", either in an error message or being output from your program.
    But what does it mean? undefined represents the absence of a value.
    
    In some cases, undefined will be used by a programmer intentionally, and they will write code to handle it.
    But usually, when you see undefined - it means something has gone wrong!

    Below are 4 typical examples of when you would see undefined.
    For each example, can you explain why we are seeing undefined?
*/

// Example 1
let a; // there is no value has been added to a therefore a is undefined. 
console.log(a);


// Example 2
function sayHello() { // there is no parameter passed to the function's argument. 
    let message = "Hello";
}

let hello = sayHello();
console.log(hello);


// Example 3
function sayHelloToUser(user) {
    console.log(`Hello ${user}`);
}

sayHelloToUser(); // again there is no value been passed when calling the function. it should look like sayHelloToUser(value);


// Example 4
let arr = [1,2,3]; 
console.log(arr[3]); // there are only 2 elements in this array (starting from 0), so the output will be undefined. 
