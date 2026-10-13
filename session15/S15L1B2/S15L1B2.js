
let arr = [12, 5, 30, 8, 45, 17, 3, 25, 10, 20];

let max = arr[0];
let position = 0;

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
        position = i;
    }
}

document.getElementById("result").textContent =
    "Mảng: " + arr.join(", ") +
    ". Số lớn nhất: " + max +
    ". Vị trí: " + (position + 1);
