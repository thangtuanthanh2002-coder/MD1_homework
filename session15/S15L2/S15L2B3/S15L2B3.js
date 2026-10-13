
let str = "JavaScript";
let count = 0;

for (let i = 0; i < str.length; i++) {
    count++;
}
document.getElementById("result").textContent =
    "Chuỗi: " + str +
    ". Số ký tự: " + count;