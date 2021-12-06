// getFullYear()	Get the year as a four digit number (yyyy)
// getMonth()	Get the month as a number (0-11)
// getDate()	Get the day as a number (1-31)
// getHours()	Get the hour (0-23)
// getMinutes()	Get the minute (0-59)
// getSeconds()	Get the second (0-59)
// getMilliseconds()	Get the millisecond (0-999)
// getTime()	Get the time (milliseconds since January 1, 1970)
// getDay()	Get the weekday as a number (0-6)
// Date.now()	Get the time. ECMAScript 5.
const d = new Date();
// console.log(d);
const dw = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const dwSmall = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
//get full year
// console.log(d.getFullYear())
// console.log(d.getUTCFullYear())
//month
// console.log(d.getMonth())
// console.log(d.getDate())
// console.log(d.getTime())
// console.log(dw)
// console.log(dw[d.getDay()])
// console.log(dwSmall[d.getDay()])


//SET MEthods

// setDate()	Set the day as a number (1-31)
// setFullYear()	Set the year (optionally month and day)
// setHours()	Set the hour (0-23)
// setMilliseconds()	Set the milliseconds (0-999)
// setMinutes()	Set the minutes (0-59)
// setMonth()	Set the month (0-11)
// setSeconds()	Set the seconds (0-59)
// setTime()	Set the time (milliseconds since January 1, 1970)
d.setFullYear(2025,11,12)
console.log(d.getFullYear())
console.log(d.getMonth())
console.log(d.getDate())
console.log(`${d.getHours()} : ${d.getMinutes()} : ${d.getSeconds()}`)
function getMYTime(mt) {
    return `${mt.getHours()} : ${mt.getMinutes()} : ${mt.getSeconds()}`;
}
function getMyDate(mt){
    return `${mt.getFullYear()}-${mt.getMonth()}-${mt.getDate()}`;
}
let a = getMYTime(d)
console.log(getMyDate(d))
