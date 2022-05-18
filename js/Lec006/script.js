// alert("Hello")
// prompt("Enter You Name");

let salery = [1000,1250,5880,548,858];

let newB = salery.map(function(d){
    return d * 1.2;
});

console.log(salery);
console.log(newB);


let findRich = newB.filter(function(q,v,newB){
    return q > 1000; 
});

console.log(findRich);

let films = [
"Doctor Strange in the Multiverse of Madness (2022) PG-13 | 126 min | Action , Adventure, Fantasy",
"Avatar: The Way of Water (2022)",
"The Northman (2022)",
"The Batman (2022)",
"The Lost City (2022)",
"Everything Everywhere All at Once (2022)",
"Top Gun: Maverick (2022)",
"Uncharted (2022)",
];

const search = document.getElementById('asd');
const data = document.getElementById('data');


search.addEventListener('input', function(){
    data.removeChild(data.firstChild);
    let serFIlter= new RegExp(search.value,'i');
    let sortedFilms = films.filter(function(d){
        return d.match(serFIlter);
    })
    let list = document.createElement('ul');
    sortedFilms.forEach(function(value){
        let listItem = document.createElement('li');
        listItem.innerText = `${value}`;
        list.appendChild(listItem);
    });
    data.appendChild(list);  
});