
let arr = ['a', '1', 'b', '5', 'c', '9', '2', 'x'];
let count = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= '0' && arr[i] <= '9') {
        count++;
    }
}
document.getElementById("result").textContent =
    "Mảng: " + arr.join(", ") +
    ". Số ký tự số: " + count;