let a = ['ali','john','hamza'];
let b = new Array('ali','john','hamza');

// console.log(b.join(","));    
console.log(b.sort());
console.log(b.reverse());

const points = [40, 100, 1, 5, 25, 10];


console.log(points);
console.log(points.sort(function(a, b) {return b - a}));
// points.sort(function(a, b){return a - b});