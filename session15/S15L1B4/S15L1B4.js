
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let reversed = [];

for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
}

document.getElementById("result").textContent =
    "Mảng ban đầu: " + arr.join(", ") +
    ". Mảng đảo ngược: " + reversed.join(", ");