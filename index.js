/*
I. Variables & Datatypes
To answer these questions, you can add them in a multiline comment section inside of script.js

like this:
*/


// ========== VARIABLES AND DATA TYPES ========== \\



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


// ===== DRIVER'S ED =====


/*
1. Make a variable that holds a person's age; be semantic
2. Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."
*/

let age = 25;

if(age >= 16){
    // console.log("Here are the keys!");
} else {
    // console.log("Sorry, you're too young.")
}


// ========== LOOPS ========== \\


/*
Remember: USE let when you initialize your for loops!

This is GOOD: for(let i = 0; i < 100; i++)

This is NO GOOD: for(i = 0; i < 100; i++)
*/


// ===== THE BASICS =====


/*
1. Write a loop that will print out all the numbers from 0 to 10, inclusive
2. Write a loop that will print out all the numbers from 10 up to and including 400
3. Write a loop that will print out every third number starting with 12 and going no higher than 4000
*/

for(let i = 0; i <= 10; i++){
    // console.log(i);
}

for(let i = 10; i <= 400; i++){
    // console.log(i);
}

for(let i = 12; i <= 4000; i += 3){
    // console.log(i);
}


// ===== GET EVEN =====


/*
1. Print out the numbers that are within the range of 1 - 100
2. Adjust your code to add a message next to even numbers only that says: "<-- is an even number"
*/

for(let i = 1; i <= 100; i++){
    if(i % 2 === 0){
        // console.log(`${i} <-- is an even number`)
    } else{
        // console.log(i);
    }
}


// ===== GIVE ME FIVE =====


/*
1. For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five

Example Output:

    I found a 5. High five!
    I found a 10. High five!
*/

for(let i = 0; i <= 100; i++){
    if(i % 5 === 0){
        // console.log("I found a " + i + ". High five!")
    } else{
        // console.log(i);
    }
}

/*
1. Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three

Example Output:

    I found a 3. Three is a crowd
    I found a 5. High five!
    I found a 6. Three is a crowd
    I found a 9. Three is a crowd
    I found a 10. High five!
*/

for(let i = 0; i <= 100; i++){
    if(i % 3 === 0){
        // console.log("I found a " + i + ". Three is a crowd.")
    } else{
        // console.log(i);
    }
}

/*
1. For numbers divisible by both three and five, be sure your code prints both messages
*/

for(let i = 0; i <= 100; i++){
    if(i % 5 === 0 && i % 3 === 0){
        // console.log("I found a " + i + ". Three is a crowd. High five!")
    } else if(i % 5 === 0){
        // console.log("I found a " + i + ". High five!")
    } else if(i % 3 === 0){
        // console.log("I found a " + i + ". Three is a crowd.")
    } else{
        // console.log(i);
    }
}


// ===== SAVINGS ACCOUNT =====


/*
1. Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.

Check your work! Your bank_account should have $55 in it.

2. You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.

Check your work! Your bank_account should have $10,100 in it.
*/

let bank_account = 0;

// for(let i = 1; i <= 10; i++){
//     // console.log(i);
//     bank_account += i;
//     // console.log(bank_account);
// }

for(let i = 1; i <= 100; i++){
    // console.log(i);
    bank_account += i * 2;
    // console.log(bank_account);
}



// ========== ARRAYS & CONTROL FLOW ========== \\




// ===== TALK ABOUT IT =====


/*
1. What are the things in an array called?
    A. indices/indexs

2. Do Arrays guarantee those things will be in order?
    A. Yes, there is a defined (zero-index) order.

3. What real-life thing could you model with an array?
    A. A connect 4 board

*/


// ===== EASY DOES IT =====


/*
1. Create an array that contains three quotes and store it in a variable called quotes
*/

let quotes = ["Hi", "I'm", "Coleman"];


// ===== ACCESSING ELEMENTS =====


/*
Given the following array const randomThings = [1, 10, "Hello", true]

1. How do you access the 1st element in the array?
    A.randomThings[0];

2. Change the value of "Hello"to "World"
    A. randomThings[2] = "World";

3. Check the value of the array to make sure it updated the array. How? Why, yes! console.log();
*/

randomThings = [1, 10, "Hello", true]

// 1.
    randomThings[0];

// 2.
    randomThings[2] = "World";

// 3.
    // console.log(randomThings);


// ===== CHANGE VALUES =====


/*
Given the following array const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]

1. What would you write to access the 3rd element of the array?
2. Change the value of "Github" to "Octocat"
3. Add a new element, "Cloud City" to the array
*/

const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];

// 1.
    ourClass[2];

// 2.
    ourClass[4] = "Octocat";

// 3.
    ourClass.push("Cloud City");
    // console.log(ourClass);


// ===== MIX IT UP =====


/*
Note: You don't really need .splice()for these. You could use it, but there are simpler array methods that are more appropriate.

Given the following array: const myArray = [5, 10, 500, 20]

1. Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.
2. Remove the 5 from the beginning of the array.
3. Add the string "Bob Marley"to the beginning of the array.
4. Remove the string of your choice from the end of the array.
5. Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse()method return anything?
*/

const myArray = [5, 10, 500, 20]

// 1.
myArray.push("Aegon");

// 2.
myArray.shift();
// console.log(myArray);

// 3.
myArray.unshift("Bob Marley");
// console.log(myArray);

// 4.
myArray.pop();
// console.log(myArray);

// 5.
myArray.reverse();
// console.log(myArray);


// ===== BIGGIE SMALLS =====


/*
Create a variable that contains an integer.

Write an if ... elsestatement that:

1. console.log()s "little number" if the number is entered is less than 100
2. console.log()s big numberif the number is greater than or equal to 100.
*/

let int = 11;

if(int >= 100){
    // console.log("big number")
} else {
    // console.log("little number")
}



// ===== MONKEY IN THE MIDDLE ===== 


/*
Write an if ... else if ... elsestatement:

1. console.log()little numberif the number entered is less than 5.
2. If the number entered is more than 10, log big number.
3. Otherwise, log "monkey".
*/

if(int < 5){
    // console.log("little number");
} else if (int > 10){
    // console.log("big number")
} else{
    // console.log("monkey")
}

// ===== WHAT'S IN YOUR CLOSET =====

/*
Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript.
*/
const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];
/*
1. What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
2. Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat".
3. Kristyn spilled coffee on her hat... modify this item to read "stained knit hat" instead of yellow.
4. Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirts array.
5. In the same way, access one item from Thom's pants array.
6. Access one item from Thom's accessories array.
7. Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
8. Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
*/

// 1.
// console.log(`Kristyn is rocking that ${kristynsCloset[2]} today!`)

// 2.
kristynsCloset.splice(6, 0, "raybans");
// console.log(kristynsCloset);

// 3.
kristynsCloset[5] = "stained knit hat"
// console.log(kristynsCloset);

// 4.
// console.log(thomsCloset[0][0]);

// 5.
// console.log(thomsCloset[1][1]);

// 6.
// console.log(thomsCloset[2][2]);

// 7.
// console.log(`Thom is looking fierce in a ${thomsCloset[0][0]}, ${thomsCloset[1][1]} and ${thomsCloset[2][1]}!`);

// 8.
thomsCloset[1][2] = "footie pajamas";
// console.log(thomsCloset[1]);



// ========== FUNCTIONS ========== \\



// ===== printGreeting =====



/*
Do you think you could write a function called printGreeting with a parameter name that returns a greeting with the argument interpolated into the greeting?

Like so?

console.log(printGreeting("Slimer"));
=> Hello there, Slimer!

You think you could? I think so too. Feel free to skip this problem, because you've already done it. If you've done the problem twice, read entire problems carefully before doing them from now on.
*/

// Skipping



// ===== printCool =====



/*
Write a function printCool that accepts one parameter, name, as an argument. The function should print the name and a message saying that that person is cool.

console.log(printCool("Captain Reynolds"));
=> "Captain Reynolds is cool";
*/

printCool = (nameParam) => {
    let answer = nameParam + " is cool";
    return answer;
}

// console.log(printCool("Coleman"));



// ===== calculateCube =====



/*
Write a function calculateCube that takes a single number and prints the volume of a cube made from that number.

console.log(calculateCube(5));
=> 125
*/

calculateCube = (num) => {
    let answer = (num * num * num);
    return answer;
}

// console.log(calculateCube(5));



// ===== isVowel =====



/*
Write a function isVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case. Test your function on every vowel and make sure it's working. In general, when you write functions, take a minute to test them with different values to make sure they behave the way you want.

console.log(isVowel("a"));
=> true
*/

isVowel = (str) => {
    let input = str;
    input.toLowerCase();
    if(input === "a" || input === "e" || input === "i" || input === "o" || input === "u"){
        return "true";
    } else{
        return "false";
    }
}

// console.log(isVowel("e"));



// ===== getTwoLengths =====



/*
Write a function getTwoLengths that accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.

console.log(getTwoLengths("Hank", "Hippopopalous"));
=> [4, 13]
*/

// getTwoLengths = (str1, str2) => {
//     // let lengthOfStr1 = 0;
//     // let lengthOfStr2 = 0;

//     // for(let i = 0; i < str1.length; i++){
//     //     lengthOfStr1++;
//     // } 
//     // // console.log(lengthOfStr1)
//     // for(let i = 0; i < str2.length; i++){
//     //     lengthOfStr2++;
//     // }

//     // let arr = [];
//     // arr.push(lengthOfStr1, lengthOfStr2);

//     // return arr;

//     return [str1.length, str2.length];
// }

// console.log(getTwoLengths("cool", "runnings"));



// ===== getMultipleLengths =====



/*
Write a function getMultipleLengths that accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.

console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));
=> [5, 4, 2, 2, 4]
*/

let arr = [];

// getMultipleLengths = (arrOfStrings) => {
//     for(let i = 0; i < arrOfStrings.length; i++){
//         let nestedCounter = 0;
//         for(let j = 0; j < arrOfStrings[i].length; j++){
//             nestedCounter++;
//         }
//         arr.push(nestedCounter);
//     }
//     return arr;
// }

getMultipleLengths = (arrOfStrings) => {
    for(let i = 0; i < arrOfStrings.length; i++){
        arr.push(arrOfStrings[i].length);
    }
    return arr;
}

// console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));



// ===== maxOfThree =====



/*
Define a function maxOfThreethat takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned. Be sure to test it with larger values in each of the three locations.

console.log(maxOfThree(6, 9, 1));
=> 9

Did you use Google and find Math.max()? If so, great job! Very resourceful—keep looking stuff up! However, for this particular question, we need you to submit a solution that does not use Math.max().
*/

// maxOfThree = (num1, num2, num3) => {
//     return Math.max(num1, num2, num3);
// }

let largest = 0;

maxOfThree = (num1, num2, num3) => {
    if(num1 >= num2 && num1 >= num3){
        largest = num1;
    } else if(num2 >= num1 && num2 >= num3){
        largest = num2;
    } else if(num3 >= num1 && num3 >= num2){
        largest = num3;
    }
    return largest;
}

// console.log(maxOfThree(1, 2, 10));



// ===== printLongestWord =====



/*
Write a function printLongestWord that accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.

console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));
=> "Peanutbutter"
*/

printLongestWord = (arrOfStrings) => {
    let longest = '';
    for(let i = 0; i < arrOfStrings.length; i++){
        // console.log(arrOfStrings[i]);
        if(arrOfStrings[i].length > longest.length){
            longest = arrOfStrings[i];
            // console.log(arrOfStrings[i])
        }
    }
    return longest;
}

// console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));



// ========== OBJECTS ========== \\



/*
Let's set up an object data structure. Let's say we have a website that sells products, and we have a user of our website, and we want to store that user's data. The object data structure is a good way to organize the data from our user.
*/



// ===== MAKE A USER OBJECT

/*
1. Create an object called user.
2. Write in to the object the key-value pairs for name, email, age, and purchased. Set the value of purchased to an empty array []. Set the other values to whatever you would like.
*/

const user = {
    name: "coleman",
    email: "securityrisk@gmail.com",
    age: 25,
    purchased: []
}

// ===== UPDATE THE USER =====

/*
1. Our user has changed his or her email address. Without changing the original userobject, update the emailvalue to a new email address.
2. Our user has had a birthday! Without changing the original userobject, increment the agevalue using the postfix operator. Hint: age++
*/

user.email = "newemail@gmail.com";
// console.log(user.email)
user.age++;
// console.log(user.age)

// ===== ADDING KEYS AND VALUES =====

/*
You have decided to add your user's location to the data that you want to collect.

1. Without changing the original userobject, add a new key location to the object, and give it a value or some-or-other location (a string).
*/

user.location = "Cincinnati, OH"
// console.log(user);

// ===== SHOPAHOLIC! =====

/*
1. Our user has purchased an item! They have purchased some "carbohydrates". Using .push(), add the string "carbohydrates" to the purchasedarray.
2. Our user has purchased an item! They have purchased some "peace of mind". Using .push(), add the string "peace of mind" to the purchasedarray.
3. Our user has purchased an item! They have purchased some "Merino jodhpurs". Using .push(), add the string "Merino jodhpurs" to the purchasedarray.
4. Console.log just the "Merino jodhpurs" from the purchasedarray.
*/

user.purchased.push("carbohydrates");
user.purchased.push("peace of mind");
user.purchased.push("Merino jodhpurs");
// console.log(user.purchased);

// ===== OBJECT-WITHIN-OBJECT =====

/*
Remember that you can add an object to an existing object in the same way that you can add any new property/value pair.

If we want to give our user a friendwith a nameand age, we could write:

user.friend = {
    name: "Grace Hopper",
    age: 85
}

When we console.log user, we would see the friendobject added to our user object.

1. Write a friend object into your user object and give the friend a name, age, location, and purchased array (empty for now)
2. Console.log just the friend's name
3. Console.log just the friend's location
4. CHANGE the friend's age to 55
5. The friend has purchased "The One Ring". Use .push()to add "The One Ring" to the friend's purchasedarray.
6. The friend has purchased "A latte". Use .push()to add "A latte" to the friend's purchasedarray.
7. Console.log just "A latte" from the friend's purchasedarray.
*/

user.friend = {
    name: "Tim Allen",
    age: 22,
    location: "Huntsville, AL",
    purchased: []
}

// console.log(user.friend.name);
// console.log(user.friend.location);
user.friend.age = 55;
user.friend.purchased.push("The One Ring");
user.friend.purchased.push("A latte");
// console.log(user.friend.purchased[1]);

// ===== LOOPS =====

/*
1. Write a for loop that iterates over the User's purchasedarray (NOT the friend's purchased array), and prints each element to the console.
2. Write a for loop that iterates over the Friend's purchasedarray, and prints each element to the console.
*/

for(let i = 0; i < user.purchased.length; i++){
    // console.log(user.purchased[i]);
}

for(let i = 0; i < user.friend.purchased.length; i++){
    // console.log(user.friend.purchased[i]);
}

// ===== FUNCTIONS CAN OPERATE ON OBJECTS =====

/*
1. Write a single function updateUserthat takes no parameters. When the function is run, it should:
2. it should increment the user's age by 1
3. make the user's name uppercase

The function does not need a returnstatement, it will merely modify the user object.

1. Write a function oldAndLoudthat performs the exact same tasks as updateUser, but instead of hard-coding it to only work on our userobject, make it take a parameter person, and have it modify the object that is passed in as an argument when the function is called. Call your oldAndLoudfunction with useras the argument.
*/

updateUser = () => {
    user.age++;
    user.name = user.name.toUpperCase();
}

updateUser();
// console.log(user);

oldAndLoud = (person) => {
    person.age++;
    person.name = person.name.toUpperCase();
}

oldAndLoud(user);
// console.log(user);



// ========== HUNGRY FOR MORE ========== \\



// ===== CAT COMBINATOR =====



// ===== MAMA CAT =====

/*
1. Define an object called cat1 that contains the following properties:

    name
    breed
    age (a number)
2. console.log the cat's age
3. console.log the cat's breed
*/

const cat1 = {
    name: "snuggles",
    breed: "tabby",
    age: 4
}

// console.log(cat1.age);
// console.log(cat1.breed);

// ===== PAPA CAT =====

/*
1. Define an object called cat2 that also contains the properties:

    name
    breed
    age (a number)
*/

const cat2 = {
    name: "fluffers",
    breed: "Maine coon",
    age: 5
}

// ===== COMBINE CATS =====

/*
The cats are multiplying!

Write a function combineCats that has two parameters mama, and papa. The function will take two arguments -- each a cat object.

Pass cat1 and cat2 as arguments to the combineCats function. The function should console.log them.

Example:

combineCats(cat1, cat2)
{ name: "Joe", age: 19, breed: "Mog" }

{ name: "Jam", age: 45, breed: "Siamese" }

This is to demonstrate that functions can take objects as arguments

You could also invoke the combineCats function by writing the objects straight into the parentheses:

combineCats({ name: "Craig", age: 20, breed: "unknown" }, { name: "Linda", age: 20, breed: "undefined" });

Make it so the combineCats function will return a combination of the two incoming cats

The result should be an object wherein the

    name is a concatenation of the parents' names
    the age is 1
    the breed is each of the parents' breeds with a hyphen in between

    Example:

console.log(combineCats(cat1, cat2));

Result:

{name: 'JoeJam', age: 1, breed: 'Mog-Siamese'};

This is to demonstrate that a function can return an object
*/

combineCats = (cat1, cat2) => {
    // console.log(cat1, cat2);
    // console.log(cat1.name);
    newName = cat1.name + cat2.name;
        // console.log(newName);
    newBreed = cat1.breed + "-" + cat2.breed;
    newAge = 1;

    newCat = {
        name: newName,
        breed: newBreed,
        age: newAge
    }
    // console.log(newCat);
    return newCat;
}

let frankencat = combineCats(cat1, cat2);
console.log(frankencat);

// ===== CAT BRAIN BENDER =====

// console.log(combineCats(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)), combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2))));