"use strict";
//2:- Personal Message: Store a person’s name in a variable, and print a message to that person.
// Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
var person = "Usman talib";
console.log(`Hello ${person}, would you like to learn some Python today?`);
//3:- Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
console.log(`Person name in lowercase: ${person.toLowerCase()}`);
console.log(`Person name in uppercase: ${person.toUpperCase()}`);
console.log(`Person name in titlecase: ${toTitleCase(person)}`);
function toTitleCase(text) {
    var words = text.toLowerCase().split(" ");
    for (var i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    return words.join(" ");
}
//4:- Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author.
// Your output should look something like the following, including the quotation marks:
// Albert Einstein once said, “A person who never made a mistake never tried anything new.”
console.log(`Abu Bakr (R.A) once said, "Taking pains to remove the pains of others is the true essence of generosity."`);
//5:- Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person.
// Then compose your message and store it in a new variable called message. Print your message.
var message = "Taking pains to remove the pains of others is the true essence of generosity.";
var famous_person = "Abu Bakr (R.A)";
console.log(`${famous_person} once said, "${message}"`);
//6:- Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name.
// Make sure you use each character combination, "\t" and "\n", at least once.
// Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
var person_name = "\t\t\tUsman Talib\n\n\n";
console.log("Before Trimming");
console.log(person_name);
console.log("After Trimming");
console.log(person_name.trim());
//7:- Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8.
// Be sure to enclose your operations in print statements to see the results.
//8:- You should create four lines that look like this:
//  Your output should simply be four lines with the number 8 appearing once on each line.
console.log(5 + 3);
console.log(5 - 3);
console.log(5 * 3);
console.log(15 / 3);
//Problem 9 and 10
//9:- Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
//10:- Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each.
// If you don’t have anything specific to write because your programs are too simple at this point,
// just add your name and the current date at the top of each program file.
// Then write one sentence describing what the program does.
var favorite_number = 8; //Declared number type variable
var message = `My favorite number is ${favorite_number}`; // Declared string type variable and Concatenated the number variable in the string
console.log(message); //Print the message
