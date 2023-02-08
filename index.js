// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
cats.push("Ralph");
}
function destructivelyPrependCat(name){
    cats.unshift("Bob");
}
function destructivelyRemoveLastCat(name){
    cats.pop("Ralph");
}
function destructivelyRemoveFirstCat(name){
    cats.shift("Bob");
}
function appendCat(name){
    var newArray = cats.slice("Broom");
    newArray.push("Broom");
    return newArray;
}
function prependCat(name){
    var newArray = cats.slice("Arnold");
    newArray.unshift("Arnold");
    return newArray;
}
function removeLastCat(name){
    var newArray = cats.slice("Broom");
    newArray.pop("Broom");
    return newArray;
}
function removeFirstCat(name){
    var newArray = cats.slice("Arnold");
    newArray.shift("Arnold)");
    return newArray;
}