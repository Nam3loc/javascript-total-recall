/*
I. Variables & Datatypes
To answer these questions, you can add them in a multiline comment section inside of script.js

like this:
*/


// ===== VARIABLES AND DATA TYPES =====

/*
1. How do we assign a value to a variable? 
    A. With the assignment operator

2. How do we change the value of a variable?
    A. By changing the value that is assigned to the variable.

3. How do we assign an existing variable to a new variable?
    A. set the existing variable equal to (assignment operator) the new variable.

4. Remind me, what are declare, assign, and define?
    A. declare is (let, const) when you declare a variable. Assign is (=) what allows you to assign it a value. Define is the value (let x = value).

5. What is pseudocoding and why should you do it?
    A. Mentally walking through your code in english before you code it to get an idea of what you will do.

6. What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
    A. I would say 30% thinking it through. 50% coding it out. 20% debugging and fool proofing.
*/

// ===== STRINGS =====

/*
For all other questions that involve writing code, you can solve them via the following instructions.

1. Create a variable called firstVariable
2. Assign it the value of the string "Hello World"
3. Change the value of this variable to some number
4. Store the value of firstVariable in a new variable called secondVariable
5. Change the value of secondVariable to any string.
6. What is the value of firstVariable?
7. Create a variable called yourNameand set it equal to your name as a string. Then, write an       expression that takes the string "Hello, my name is " and the variable yourNameso that it returns a new string with them concatenated.
    ex: Hello, my name is Jean Valjean
*/

let firstVariable = "Hello World";
firstVariable = 42;

let secondVariable = firstVariable;
secondVariable = "any string";

// console.log(firstVariable); // A. 42

let yourName = "Coleman Escue";
// console.log(`Hello, my name is ${yourName}.`)

// ===== BOOLEANS =====

/*
Using the provided variable definitions, replace the blanks so that all log statements print true in the console. Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print trueto the console
*/
/*
  const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

  console.log(a < b);
  console.log(c > d);
  console.log('Name' === 'Name');

  // FOR THE NEXT TWO, USE ONLY && OR ||

  console.log(true || false);
  console.log(false && false && false && false && false || true);
  console.log(false === false)
  console.log(e === 'Kevin');
  console.log(a && b < c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
  console.log(a * a === d); // note: the answer is a simple arithmetic equation, not something "weird"
  console.log(48 == '48');
*/

// ===== THE FARM =====

/*
1. Declare a variable animal. Set it to be either "cow" or something else
2. Write code that will print out "mooooo" if the it is equal to cow
3. Change your code so that if the variable animal is anything other than a cow, it will print "Hey! You're not a cow."
4. Commit
*/

let animal = "cow";
if(animal === "cow"){
    // console.log("mooooo");
} else{
    // console.log("Hey! You're not a cow.");
}