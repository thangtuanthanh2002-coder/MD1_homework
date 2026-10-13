let arr = ['a', '-', 'b', '-', 'c', '2', '-', '6'];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '-') {
        arr[i] = '_';
    }
}
document.getElementById("result").textContent =
    "Mảng sau khi thay thế: " + arr.join(", ");