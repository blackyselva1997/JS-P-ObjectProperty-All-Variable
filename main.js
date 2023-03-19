// 3)Identify all of the variables, object property names, primitive values, and objects shown in the following code

function hello(greeting, name) { // hello it's - function. greeting & name - parameters
    return greeting + ' ' + name; // Arguments passing 
}

function xyzzy() { // xyzzy it's - function
    return { a: 1, b: 2, c: [3, 4, 5], d: {} }; // function returns object and values numbers,array.
}

const howdy = hello('Hi', 'Grace'); // hello function two keywords arugument passing and value stored in howdy
let foo = xyzzy(); // xyzzy function call in keyword stored in foo