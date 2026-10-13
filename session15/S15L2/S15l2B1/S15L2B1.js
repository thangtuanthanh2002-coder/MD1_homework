
let arr = ['c', 's', 'c', '2', '6', '1'];
let result = "";

for (let i = arr.length - 1; i >= 0; i--) {
    result += arr[i];
}
document.getElementById("result").textContent =
    "Mảng ban đầu: " + arr.join(", ") +
    ". Sau khi đảo ngược: " + result;