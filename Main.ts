//Que 16: More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests 
//to invite to dinner.

// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you
//   found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. 
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.

// ***********************************************************************************************************************

// • Start with your program from Exercise 15.

let guestList: string[] = ["Zara" , "Sheza" , "Laiba"];
let absentGuest: string = "Zara";

let newGuest: string = "Hooria";
guestList[0] = newGuest;

// Add a print statement to the end of your program informing people that you found a bigger dinner table.

console.log(`\nGood News! We find big dinner table so we are inviting 3 more guests.\n\n`);

// • Add one new guest to the beginning of your array.

guestList.unshift("Kiran");

// • Add one new guest to the middle of your array. 

guestList.splice(2 , 0 , "Areeba");

// • Use append() to add one new guest to the end of your list.

guestList.push("Anusha");

// • Print a new set of invitation messages, one for each person in your list.

for (let i = 0; i < guestList.length; i++) {
    console.log("Dear" + " " + guestList[i] + 
    ",\n\nIt is our pleasure to invite you in our dinner party.\n\nThank You!\n\n");
};