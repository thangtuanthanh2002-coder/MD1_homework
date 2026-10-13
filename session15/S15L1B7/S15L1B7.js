
let arr = [12, 5, 30, 8, 45, 17, 3, 25, 10, 20];

for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] < arr[j]) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}
document.getElementById("result").textContent =
    "Mảng giảm dần: " + arr.join(", ");