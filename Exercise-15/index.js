let persons = ["Johnson", "Mike", "David"];

let index = persons.indexOf("Mike");

if (index == 1) {
    persons.splice(index, 1, "Peter");
}
else {
    console.log(persons);
}

for (var i = 0; i < persons.length; i++) {
    const message = persons[i];
    document.write(`<h2>${message} Let's Dinner Tonight at my Home!.</h2>`);
}