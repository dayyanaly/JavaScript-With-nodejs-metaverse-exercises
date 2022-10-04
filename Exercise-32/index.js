let currentUsers = ["Ali", "Hamza", "Hussain", "Masood", "Hammad"];
let newUsers = ["Ali", "Uzaifa", "Fahim", "Masood", "Naeem"];

newUsers.forEach(user => {
    if (currentUsers.includes(user)) {
        console.log(`The ${user} Is Available!`);
    }
    else {
        console.log(`The ${user} Will Need To Enter A New Username!`);
    }
});