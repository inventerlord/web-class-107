/**
 * 
 * Data-types
 * 1. Numbers
 * 2. String
 * 3. boolean
 * 4. object
 * 5. array
 * 6. undefined
 * 7. null
 */

// getElementById()
// getElementsByClassName()
// document.getElementsByName()
// document.getElementsByTagName()
// document.querySelector()
// document.querySelectorAll()
// eval()


function calculate(val) {
    return eval(val)
}
console.log(calculate("3+4-1")); //argument

function addVal(a = 0, b = 0) {
    return a + b;
}
function onscreenp(val) {
    document.querySelector('#app').innerHTML = eval(val);
}
onscreenp("17 / 2");
// console.log(addVal(5, 26))
addVal(5, 26);
// console.log("kjashdkash");

/**
 * simple - non parameter
 * parameter
 * default parameter
 * 
 */

// object

let person = {
    firstname: "Slamaan",
    sname: "Ahsan",
    age: 20,
    greet: function () {
        console.log(this.firstname);
    },
    saveData: () => {
        localStorage.setItem("name","Salmaan")
    }
}
// console.log(person.firstname);

person.saveData()