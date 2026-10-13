
let arr = [10, 20, 30, 40, 50];

let max = arr[0];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    if (arr[i] > max) {
        max = arr[i];
    }
}

let average = sum / arr.length;

document.getElementById("result").textContent =
    "Mảng: " + arr.join(", ") +
    ". Số lớn nhất: " + max +
    ". Giá trị trung bình: " + average;