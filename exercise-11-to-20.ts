//11:- Names: Store the names of a few of your friends in a array called names.
//Print each person’s name by accessing each element in the list, one at a time.

var names: string[] = ["Usman", "Akbar", "Subtain", "Talha", "Hassan", "Hussain", "Minhaj"];

names.forEach((n) => console.log(n))


//12:- Greetings: Start with the array you used in Exercise 11,
// but instead of just printing each person’s name, print a message to them.
// The text of each message should be the same, but each message should be personalized with the person’s name.

names.forEach((n) => console.log(`Hello ${n}, How are you?`))


//13:- Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car,
// and make a list that stores several examples. Use your list to print a series of statements about these items,
// such as “I would like to own a Honda motorcycle.”
var favorite_transportation: string[] = ["motorcycle", "car", "train", "bus", "plane"];

console.log(`I would like to own a Honda ${favorite_transportation[0]}.`);
console.log(`I think a Tesla ${favorite_transportation[1]} would be a lot of fun to drive.`);
console.log(`I've always wanted to take a ${favorite_transportation[2]} across the country.`);
console.log(`I love taking the ${favorite_transportation[3]} to work because it's so relaxing.`);
console.log(`I've never been on a ${favorite_transportation[4]}, but I'd love to try it someday.`);


//14:- Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that
// includes at least three people you’d like to invite to dinner.
// Then use your list to print a message to each person, inviting them to dinner.

var people_to_invite: string[] = ["Usman", "Akbar", "Subtain", "Talha", "Hassan", "Hussain", "Minhaj"];
people_to_invite.forEach((guest: string) => {
    console.log(`Dear ${guest},\nYou are invited to dinner at my place. Please join us for a memorable evening.\nSincerely, Usman Talib\n`);
})


// 15:- Changing Guest List: You just heard that one of your guests can’t make the dinner,
// so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
//
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
//
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
//
// • Print a second set of invitation messages, one for each person who is still in your list.
//


// Removing Talha from the List and add Sami to the List

people_to_invite.splice(3, 1, "Sami");

people_to_invite.forEach((guest: string) => {
    console.log(`Dear ${guest},\nYou are invited to dinner at my place. Please join us for a memorable evening.\nSincerely, Usman Talib\n`);
})


// 16:-  More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
//
// • Add one new guest to the beginning of your array.
//
// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.

// Adding a guest at start

people_to_invite.unshift("Talha");

// Add more Guest in the Middle

people_to_invite.splice(Math.round(people_to_invite.length / 2), 0, "Yasir")


// Add more Guest at the end of the array
people_to_invite.push("Saad");


people_to_invite.forEach((guest: string) => {
    console.log(`Dear ${guest},\nYou are invited to dinner at my place. Please join us for a memorable evening.\nSincerely, Usman Talib\n`);
})


// 17:- Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list.
// Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
//
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
//
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
console.log("Add a new line that prints a message saying that you can invite only two people for dinner");

for (var i = people_to_invite.length-1; i > 1; i--) {
    console.log("Hello ",people_to_invite[i]+ ", I'm sorry you can’t invite them to dinner")
    people_to_invite.pop();
}
console.log(people_to_invite);
people_to_invite.forEach((guest: string) => {
    console.log(`Dear ${guest},\nYou are Still invited to dinner at my place. Please join us for a memorable evening.\nSincerely, Usman Talib\n`);
})
people_to_invite.pop();
people_to_invite.pop();
console.log(people_to_invite);

// 18:- Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

var locations:string[] = ["Makkah", "Madina", "Hunza", "Gilgit", "K2"];
console.log(locations);
var sortedLocations:string[] = [...locations].sort();
console.log(sortedLocations);
console.log(locations);
var reverseAlphabeticalLocations:string[] = [...sortedLocations].reverse();
console.log(reverseAlphabeticalLocations);
console.log(locations);
locations.reverse()
console.log(locations);
locations.reverse()
console.log(locations);
locations.sort()
console.log(locations);
locations.reverse()
console.log(locations);


// 19:- Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
console.log(people_to_invite.length); // it will be 0 because we made Array empty at last.

// 20:- Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like.
// Write a program that creates a list containing these items.

var myList:string[] = ["K2", "Chenab", "Pakistan", "Faisalabad", "Urdu", "English"];

function addItemToList(item:string){
    myList.push(item)
}
function removeItemFromList(item:string, index:number){
    myList.splice(index,0, item)
}
