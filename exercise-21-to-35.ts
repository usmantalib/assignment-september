// 21:- They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
type myObjType = {
    mountain: string,
    river: string,
    country: string,
    city: string,
    language: string
}
var myObject: myObjType = {
    mountain: "K2",
    river: "Chenab",
    country: "Pakistan",
    city: "Faisalabad",
    language: "Urdu",
}

console.log(myObject);


// 22:- Intentional Error: If you haven’t received an array index error in one of your programs yet,
// try to make one happen.
// Change an index in one of your programs to produce an index error.
// Make sure you correct the error before closing the program.

const data: string[] = ["K2", "Chenab", "Pakistan", "Faisalabad", "Urdu", "English"]
const index: number = 100;
const value: string = data[index];
if (value !== undefined) {
    console.log(`Value at index ${index}: ${value}`);
} else {
    console.log(`Index ${index} is undefined`);
}

// 23:- Conditional Tests: Write a series of conditional tests. Print a statement describing each test
// and your prediction for the results of each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.

let num1: number = 5;
let num2: number = 10;
let str1: string = 'hello';
let str2: string = 'world';
let arr1: number[] = [1, 2, 3];
let arr2: number[] = [1, 2, 3];
let obj1: { country: string } = {country: 'Pakistan'};
let obj2: { country: string } = {country: 'Pakistan'};

// Test 1:
// Equality test for numbers
console.log("Is num1 == num2? I predict False.");
console.log(num1 == num2);

// Test 2:
// Equality test for strings
console.log("Is str1 == str2? I predict False.");
console.log(str1 == str2);

// Test 3:
// Equality test for arrays (reference comparison)
console.log("Is arr1 == arr2? I predict False.");
console.log(arr1 == arr2);

// Test 4:
// Equality test for objects (reference comparison)
console.log("Is obj1 == obj2? I predict False.");
console.log(obj1 == obj2);

// Test 5:
// Inequality test for numbers
console.log("Is num1 != num2? I predict True.");
console.log(num1 != num2);

// Test 6:
// Inequality test for strings
console.log("Is str1 != str2? I predict True.");
console.log(str1 != str2);

// Test 7:
// Inequality test for arrays
console.log("Is arr1 != arr2? I predict True.");
console.log(arr1 != arr2);

// Test 8:
// Inequality test for objects
console.log("Is obj1 != obj2? I predict True.");
console.log(obj1 != obj2);

// Test 9:
// Logical AND test
console.log("Is (num1 < num2) && (str1 === 'hello')? I predict True.");
console.log((num1 < num2) && (str1 === 'hello'));

// Test 10:
// Logical OR test
console.log("Is (num1 > num2) || (str1 === 'hello')? I predict True.");
console.log((num1 > num2) || (str1 === 'hello'));


// 24:- More Conditional Tests: You don’t have to limit the number of tests you create to 10.
// If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array


// Tests for equality and inequality with strings
const string1: string = 'apple';
const string2: string = 'banana';
console.log("Is string1 == string2? I predict False.");
console.log(string1 == string2);
console.log("Is string1 != string2? I predict True.");
console.log(string1 != string2);

// Tests using the lower case function
const lowercaseString = 'HELLO USMAN';
console.log("Is lowercaseString in lowercase 'HELLO USMAN'? I predict True.");
console.log(lowercaseString.toLowerCase() == 'hello usman');

// Numerical tests
const numA: number = 10;
const numB: number = 5;
console.log("Is numA > numB? I predict True.");
console.log(numA > numB);
console.log("Is numA < numB? I predict False.");
console.log(numA < numB);
console.log("Is numA >= numB? I predict True.");
console.log(numA >= numB);
console.log("Is numA <= numB? I predict False.");
console.log(numA <= numB);

// Tests using "and" and "or" operators
const isSunny: boolean = true;
const isWarm: boolean = true;
console.log("Is it sunny AND warm? I predict True.");
console.log(isSunny && isWarm);
console.log("Is it sunny OR warm? I predict True.");
console.log(isSunny || isWarm);

// Test whether an item is in an array
const fruitsArray: string[] = ['apple', 'banana', 'cherry', 'date'];
const searchFruit: string = 'banana';
console.log(`Is ${searchFruit} in the fruitsArray? I predict True.`);
console.log(fruitsArray.includes(searchFruit));

// Test whether an item is not in an array
const veggiesArray: string[] = ['carrot', 'broccoli', 'spinach', 'kale'];
const searchVeggie: string = 'zucchini';
console.log(`Is ${searchVeggie} NOT in the veggiesArray? I predict True.`);
console.log(!veggiesArray.includes(searchVeggie));


// 25:- Alien Colors #1: Imagine an alien was just shot down in a game.
// Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green.
// If it is, print a message that the player just earned 5 points.
// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)


//Here's a program with two versions: one that passes the if test (green alien) and another that fails (non-green alien):
// Version 1 (Passes the if test, green alien):
var alien_color: string = 'green';
if (alien_color === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting down the green alien.");
}

//In this version, the alien_color is 'green', so the condition in the if statement (alien_color === 'green') is true, and the message is printed.
// Version 2 (Fails the if test, non-green alien):

alien_color = 'red'; // Change to 'yellow' for the yellow alien
if (alien_color === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting down the green alien.");
}

alien_color = 'yellow'; // Change to 'yellow' for the yellow alien
if (alien_color === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting down the green alien.");
}

// 26:- Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
//
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
//
// • Write one version of this program that runs the if block and another that runs the else block.


if (alien_color === "green") {
    console.log("Player just earned 5 points for shooting the alien.");
}
if (alien_color !== "green") {
    console.log("Player just earned 10 points.");
}

if (alien_color === "green") {
    console.log("Player just earned 5 points for shooting the alien.");
} else {
    console.log("Player just earned 10 points.");
}


// 27:- Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
//
// • If the alien is yellow, print a message that the player earned 10 points.
//
// • If the alien is red, print a message that the player earned 15 points.
//
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.


if (alien_color === "green") {
    console.log("Player earned 5 points");
} else if (alien_color === "yellow") {
    console.log("Player earned 10 points");
} else if (alien_color === "red") {
    console.log("Player earned 15 points");
}


if (alien_color === "green") {
    console.log("Player earned 5 points");
}

if (alien_color === "yellow") {
    console.log("Player earned 10 points");
}

if (alien_color === "red") {
    console.log("Player earned 15 points");
}

// 28:- Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.
//
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
//
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
//
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
//
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
//
// • If the person is age 65 or older, print a message that the person is an elder.

const age: number = 30; // Replace this with the person's age

if (age < 2) {
    console.log("The person is a baby.");
} else if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");
} else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
} else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
} else if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
} else {
    console.log("The person is an elder.");
}

// 29:- Favorite Fruit: Make a array of your favorite fruits,
// and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
//
// • Write five if statements. Each should check whether a certain kind of fruit is in your array.
// If the fruit is in your array, the if block should print a statement, such as You really like bananas!


const favorite_fruits: string[] = ["banana", "apple", "strawberry"];

if (favorite_fruits.includes("banana")) {
    console.log("You really like bananas!");
}

if (favorite_fruits.includes("apple")) {
    console.log("You really like apples!");
}

if (favorite_fruits.includes("strawberry")) {
    console.log("You really like strawberries!");
}

// 30:- Hello Admin: Make a array of five or more usernames, including the name 'admin'.
// Imagine you are writing code that will print a greeting to each user after they log in to a website.
// Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
//
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

const usernames: string[] = ["admin", "Usman", "Hassan", "Hussain", "Ali"];

for (var i = 0; i < usernames.length; i++) {
    if (usernames[i] === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${usernames[i]}, thank you for logging in again.`);
    }
}


// 31:- No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
//
// • Remove all of the usernames from your array, and make sure the correct message is printed.

usernames.splice(0, usernames.length);

if (usernames.length === 0) {
    console.log("We need to find some users!");
}

// 32:- Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
//
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
//
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
//
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.


// List of current users
const current_users: string[] = ["Usman", "Hassan", "Hussain", "Saad", "Akbar"];

// List of new users
const new_users: string[] = ["Talha", "Subtain", "Hassan", "Hussain", "Yasir"];

// Function to check if a username is already used (case-insensitive)
function isUsernameTaken(username: string): boolean {
    const lowercaseUsername = username.toLowerCase();
    return current_users.some((user) => user.toLowerCase() === lowercaseUsername);
}

// Loop through new_users and check for username availability

for (var i = 0; i < new_users.length; i++) {
    if (isUsernameTaken(new_users[i])) {
        console.log(`Username '${new_users[i]}' is not available. Please enter a new username.`);
    } else {
        console.log(`Username '${new_users[i]}' is available.`);
    }
}


// 33:- Ordinal Numbers: Ordinal numbers indicate their position in a array,
// such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
//
// • Loop through the array.
//
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number.
// Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const number of numbers) {
    let ordinal: string;

    if (number === 1) {
        ordinal = "1st";
    } else if (number === 2) {
        ordinal = "2nd";
    } else if (number === 3) {
        ordinal = "3rd";
    } else {
        ordinal = `${number}th`;
    }
    console.log(ordinal);
}

// 34:- Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array,
// and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza.
// For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
//
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza.
// The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!


const favoritePizzas: string[] = ["Chicken Tika", "Malai boti", "Special"];

// Printing pizza names using a for loop
console.log("My favorite pizzas:");

favoritePizzas.forEach((pizza) => {
    console.log(pizza);
})
// Printing sentences about each pizza
console.log("I like these pizzas:");

favoritePizzas.forEach((pizza) => {
    console.log(`I like ${pizza} pizza.`);
})

// A statement about your love for pizza
console.log("I really love pizza!");

// 35:- Animals: Think of at least three different animals that have a common characteristic.
// Store the names of these animals in a list, and then use a for loop to print out the name of each animal.
// • Modify your program to print a statement about each animal, such as A dog would make a great pet.
// • Add a line at the end of your program stating what these animals have in common.
// You could print a sentence such as Any of these animals would make a great pet!


const animals: string[] = ["Dog", "Cat", "Rabbit"];

// Printing the names of animals using a for loop
console.log("List of animals:");

animals.forEach((animal) => {
    console.log(animal);
})
// Printing statements about each animal
console.log("Statements about each animal:");


animals.forEach((animal) => {

    switch (animal) {
        case "Dog":
            console.log("A dog would make a great pet.");
            break;
        case "Cat":
            console.log("A cat is a lovely companion.");
            break;
        case "Rabbit":
            console.log("A rabbit is an adorable pet.");
            break;
        default:
            console.log(`A ${animal} would be an interesting choice.`);
    }
})

// A sentence about what these animals have in common
console.log("Any of these animals would make a great pet!");
