let min = parseInt(prompt("Enter the minimum number: "));
let max = parseInt(prompt("Enter the maximum number: "));
let current = parseInt(prompt("Enter the current number:"));

if (current >=min && current <=max) {
    console.log ("you win!")
}

else if (min > max) {
    console.log ("ERROR")
}