let friends = ['ali','salmaan','john'];  //starts from 0
let fr2 = new Array('ali','salmaan','john');
let n = "Salmaan"
// friends.forEach(function (d) {
//     console.log(d);
// });
friends[3] = "Hamza";
friends[2] = "Faiz";

friends.push("john"); //Add item to last
friends.pop(); // remove from last
friends.shift(); //remove from first
friends.unshift("Hassan"); // add to first

// console.log(friends);

let slamaan = [];
slamaan["name"] = "Salmaan";
slamaan["father"] = "Ahsan Raza";
slamaan["age"] = 25;
// console.log(slamaan['father']);
let users = [
    {name:"Salmaan",father:"ahsan",age:25},
    {name:"ALi",father:"ahsan",age:26},
];
console.log(users)

function searchUser(name) {
    let status = 0;
    users.forEach(function (user) {
        if (name.toLowerCase() === user.name.toLowerCase()){
            console.log("user found");
            status = 1;
        }
    });
    if (status == 0){
        console.log("User Does not Exist");
    }

}

searchUser("ALI");
console.log(Array.isArray(n))
