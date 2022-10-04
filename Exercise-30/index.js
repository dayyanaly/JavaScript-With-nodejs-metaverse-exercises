let users = ["Ali", "Hamza", "Hussain", "Masood", "Hammad"];

for (index of users) {
    if (index === "Ali") {
        console.log(`Hello ${index} Would You Like To See A Status Report...?`);
    } else {
        console.log(`Hello ${index} Thank You For Logging In Again!`);
    }
}