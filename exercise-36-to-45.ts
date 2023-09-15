// 36:- T-Shirt: Write a function called make_shirt() that accepts a size and the
// text of a message that should be printed on the shirt.
// The function should print a sentence summarizing the size of the shirt and
// the message printed on it. Call the function.

function make_shirt(size: string, message: string): void {
    console.log(`T-shirt size: ${size}`);
    console.log(`Message: "${message}"`);
}

// Calling the function with example values
make_shirt("Medium", "I love TypeScript!");


//37:- Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript.
// Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt_new(size: string = "Large", message: string = "I love TypeScript"): void {
    console.log(`T-shirt size: ${size}`);
    console.log(`Message: "${message}"`);
}

// Create a large shirt with the default message
make_shirt_new();

// Create a medium shirt with the default message
make_shirt_new("Medium");

// Create a small shirt with a different message
make_shirt_new("Small", "TypeScript is awesome!");


//38:- Cities: Write a function called describe_city() that accepts the name of a city and its country.
// The function should print a simple sentence, such as Karachi is in Pakistan.
// Give the parameter for the country a default value. Call your function for three different cities,
// at least one of which is not in the default country.


function describe_city(city: string, country: string = "Unknown Country"): void {
    console.log(`${city} is in ${country}.`);
}

// Calling the function for three different cities
describe_city("Karachi", "Pakistan");
describe_city("New York"); // Uses the default country
describe_city("Paris", "France");

// 39:- City Names: Write a function called city_country() that takes in the name of a city and its country.
// The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.


function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}

// Calling the function with three city-country pairs
const location1 = city_country("Lahore", "Pakistan");
const location2 = city_country("New York", "USA");
const location3 = city_country("Sydney", "Australia");

console.log(location1);
console.log(location2);
console.log(location3);

// 40:- Album: Write a function called make_album() that builds a Object describing a music album.
// The function should take in an artist name and an album title, and it should return a Object containing
// these two pieces of information. Use the function to make three dictionaries representing different albums.
// Print each return value to show that Objects are storing the album information correctly.
// Add an optional parameter to make_album() that allows you to store the number of tracks on an album.
// If the calling line includes a value for the number of tracks, add that value to the album’s Object.
// Make at least one new function call that includes the number of tracks on an album.


function make_album(artist: string, title: string, tracks?: number):{} {
    type albumType = {
        artist: string,
        title: string,
        tracks?: number
    }
    const album: albumType = {
        artist: artist,
        title: title
    };

    if (tracks !== undefined) {
        album.tracks = tracks;
    }

    return album;
}

// Create three dictionaries representing different albums
const album1 = make_album("Artist1", "Album Title 1");
const album2 = make_album("Artist2", "Album Title 2", 12); // Including the number of tracks
const album3 = make_album("Artist3", "Album Title 3");

// Print each return value to show that the objects are storing the album information correctly
console.log(album1);
console.log(album2);
console.log(album3);


// 41:- Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
// which prints the name of each magician in the array.

function show_magicians(magicians: string[]): void {
    for (var i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}

// Magician names copied from this site https://www.rogerlapin.co.uk/famous-magicians/famous-magicians-top-10/
// Create an array of magician's names
const magicianNames: string[] = ["Shin Lim", "Chris Angel", "Jeff McBride", "Siegfried & Roy"];

// Call the show_magicians() function to print the names
show_magicians(magicianNames);


// 42:- Great Magicians: Start with a copy of your program from Exercise 39.
// Write a function called make_great() that modifies the array of magicians by adding
// the phrase the Great to each magician’s name.
// Call show_magicians() to see that the list has actually been modified.



function make_great(magicians: string[]): string[] {
    const greatMagicians: string[] = [];
    for (var i = 0; i < magicians.length; i++) {
        greatMagicians.push(`${magicians[i]} the Great`);
    }
    return greatMagicians;
}


// Call make_great() to modify the array and store the modified array
const greatMagicianNames = make_great(magicianNames);

// Call show_magicians() to see the modified list
show_magicians(greatMagicianNames);



// 43:- Unchanged Magicians: Start with your work from Exercise 40.
// Call the function make_great() with a copy of the array of magicians’ names.
// Because the original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the
// original names and one array with the Great added to each magician’s name.



// Create a copy of the array for the original names
const originalMagicianNames: string[] = magicianNames;

// Call make_great() with a copy of the array to create the modified array
const greatMagicianNamesNew = make_great(magicianNames);

// Call show_magicians() to display the original and modified arrays
console.log("Original Magicians:");
show_magicians(originalMagicianNames);

console.log("Great Magicians:");
show_magicians(greatMagicianNamesNew);



// 44:- Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
// The function should have one parameter that collects as many items as the function call provides,
// and it should print a summary of the sandwich that is being ordered.
// Call the function three times, using a different number of arguments each time.

function makeSandwich(...items: string[]): void {
    console.log("Making a sandwich with the following items:");
    for (var i = 0; i < items.length; i++) {
        console.log(`- ${items[i]}`);
    }
    console.log("Enjoy your sandwich!");
}

// Call the function with different numbers of arguments
makeSandwich("Ham", "Cheese", "Lettuce");
makeSandwich("Turkey", "Swiss Cheese");
makeSandwich("Peanut Butter", "Jelly", "Banana");


// 45:- Cars: Write a function that stores information about a car in a Object.
// The function should always receive a manufacturer and a model name.
// It should then accept an arbitrary number of keyword arguments.
// Call the function with the required information and two other name-value pairs,
// such as a color or an optional feature. Print the Object that’s returned to make sure
// all the information was stored correctly.

function createCar(manufacturer: string, model: string, ...extras: [string, any][]): Record<string, any> {
    const carInfo: Record<string, any> = {
        manufacturer: manufacturer,
        model: model,
    };

    for (const [key, value] of extras) {
        carInfo[key] = value;
    }
    return carInfo;
}

// Call the function with required information and additional name-value pairs
const carInfo = createCar("Toyota", "Camry", ["color", "blue"], ["year", 2023]);

console.log(carInfo);
