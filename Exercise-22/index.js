let bikes = ["YAMAHA", "SUZUKI", "SUPERSTAR", "HONDA"];
console.log(bikes);

for (let data in bikes) {
    if (typeof data === "string") {
        console.log(bikes[data]);
    }
    else {
        console.log("Index Error", bikes[data]);
    }
}