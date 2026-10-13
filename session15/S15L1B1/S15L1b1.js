

let arr = [5, 12, 8, 15, 3, 20, 9, 10, 25, 7];
let count = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 10) {
        count++;
    }
}

document.getElementById("result").textContent =
    "Mảng: " + arr.join(", ") +
    ". Có " + count + " số nguyên lớn hơn hoặc bằng 10.";

