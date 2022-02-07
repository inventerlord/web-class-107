// Localstorage
// localStorage.setItem("username","Salmaan")
// localStorage.setItem("email","Salmaan@example.com")
// let a = localStorage.getItem("username")
// localStorage.removeItem("username")
// localStorage.clear()
// console.log(a);

let person = {
    first_name:"Salmaan",
    second_name:"Ahsan",
    age:25,
    address:"kajsshdkjsa"
}

localStorage.setItem("userdata",JSON.stringify(person))
let z = JSON.parse(localStorage.getItem('userdata'))


console.log(z);