let str1 = "Quick brown fox";
let str2 = "salmaan";
let pas = "   Hello  ";
let namesFr = "salmaan,ahsan,hamza";
console.log(str1.slice(6,11));
console.log(str1.substring(6,11));
console.log(str1.substr(6,5));

console.log(str1.replace("brown","red"));

console.log(str2.toUpperCase());
console.log(str2.toLowerCase());

console.log(str1.concat(str2));
let ps = pas.trim();
console.log(ps.length);
console.log(str1.padStart(5,0));

console.log(str2.charAt(0));
console.log(namesFr.split(","));
console.log(str1.split(" "));