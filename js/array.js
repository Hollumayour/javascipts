// // array is a variable like structure that can store more than 1 variable
// // each variable is coma seperated
let fruits = ["apple", "orange", "banana"];
// fruits[0] = "grape";

fruits.push("melon", "pawpaw", "pear");
// console.log(fruits[5])
// // .push will push an item to the end of the array

// fruits.pop
// console.log(fruits.pop());
// // .pop will remove the last element
// fruits.unshift("mango", "tangerine");
// console.log(fruits);
// // adds a new item to the begining
// fruits.shift();
// console.log(fruits);
// // remove the first element

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);

// let arrayLenght = fruits.length;
// // to find total number of array
// let index = fruits.indexOf("apple");
// // to find the specific location

// // if the element u type is not there the index will be negative 1, so i can use if statement to tell user element not found
// // to loop through use for loop
// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

// // to display in descending order
// for (let i = fruits.length - 1; i >= 0; i--) {
//     console.log(fruits[i]);
// }
// document.getElementById("name").innerHTML;
// // more advanced way of looping through
// for (let fruit of fruits) {
//     console.log(fruit);
// }

// // to sort and array use this
// fruits.sort();
// // this will sort your array in alphabetical order
// // to sort in reverse alphabetical order use
// fruits.sort().reverse();