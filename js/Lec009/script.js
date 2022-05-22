// let username = "faizz";

// if (username === "faiz") {
//   console.log("Username Accepted");
// } else {
//   console.log("Please enter Correct Username");
// }

// let food = "ss";

// if (food === "pizza") {
//   console.log("pizza");
// } else if (food === "burger") {
//   console.log("burger");
// } else if (food === "milkShake") {
//   console.log("milkShake");
// } else {
//   console.log("Please enter a food name");
// }

// let a = 7;
// switch (a) {
//   case 0:
//     console.log("this is case 0");
//     break;
//   case 1:
//     console.log("this is case 1");
//     break;
//   case 2:
//     console.log("this is case 2");
//     break;
//   case 3:
//     console.log("this is case 3");
//     break;
//   default:
//     console.log("please select a valid option");
//     break;
// }
// let b = -3;

// while
// while (b > 0) {
//   console.log("b = " + b);
//   b--;
// }
// do {
//   console.log("b = " + b);
//   b--;
// } while (b > 0);

// for (let i = 1; i < 10; i++) {
//   console.log(`Value of i = ${i}`);
// }

let friends = [];
friends[0] = "faiz";
friends[1] = "Hamza";
friends[2] = "Payman";
friends[3] = "John";

// for (let z = 0; z < friends.length; z++){
//   console.log(friends[z]);
// }
for (let x in friends) {
  if (friends[x] == "John") {
    console.log("found");
  }
}
