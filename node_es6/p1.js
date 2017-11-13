if (true){
for (var i = 0; i<10; i++){
    console.log(i)
}
console.log(i)
}




const animals=["dog", "cat", "giraffe", "moose"]

animals.map(function(animal){
    return animal.length;
});

function getLengths(arr){
    return arr.map(elem => elem.length)
}

console.log(getLengths(animals))


function pluralize(arr){
    return arr.map(elem=> elem + 's')
}