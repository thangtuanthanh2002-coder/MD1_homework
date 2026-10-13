
let arr = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
let x = 25;
let found = false;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === x) {
        found = true;
        break;
    }
}
if (found) {
    document.getElementById("result").textContent =
        "Number " + x + " is in the array";
} else {
    document.getElementById("result").textContent =
        "Number " + x + " is not in the array";
}