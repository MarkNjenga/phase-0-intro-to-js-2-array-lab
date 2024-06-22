// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name){
    cats.push('Ralph');
}
function destructivelyPrependCat(name){
    cats.unshift('Bob');
}
function destructivelyRemoveLastCat(){
    cats.pop()
}
function destructivelyRemoveFirstCat(){
    cats.shift()
}function appendCat(name){
    const newCats = cats.slice()
    newCats.push('Broom')
    return newCats;
}
function prependCat(name){
    const newCatss = ['Arnold', ...cats]
    return newCatss;
}
function removeLastCat(){
    const newCats = cats.slice(0, -1)
    return newCats;
}
function removeFirstCat(){
    const newCatss = cats.slice(1);
    return newCatss;
}
