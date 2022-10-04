let persons = ["Johnson", "Mike", "David"];

let index = persons.indexOf("Mike");

if (index == 1) {
    persons.splice(index, 1, "Peter");
}
else {
    console.log(persons);
}

console.log('I Found Bigger Dinner Table!');

persons.push("Mark", "Robert", "John");

for (var i = 0; i < persons.length; i++) {
    var message = persons[i];
    console.log(`${message} Let's Dinner Tonight at my Home!.`);
}

console.log("I Invite Only Two Friends!")

let remove = persons.length;
console.log(remove);

// persons.splice(2);
// console.log(persons);

for (let i = remove; i > 2; i--) {
    console.log(`Sorry... ${persons[i - 1]} You Are Not Invited! Next Time for sure`);
    persons.pop()
}

console.log(persons);
console.log(persons.length);

persons.length = 0
console.log(persons);