let persons = ["Johnson", "Mike", "David"];
let index = persons.indexOf("Mike");

if (index == 1) {
    persons.splice(index, 1, "Peter");
}
else {
    console.log(persons);
}

persons.push("Mark", "Robert", "John");

let remove = persons.length;

for (let i = remove; i > 2; i--) {
    persons.pop()
}

for (var i = 0; i < persons.length; i++) {
    var message = persons[i];
    document.write(`<h1>${message} Let's Dinner Tonight at my Home!.</h1>`);
}