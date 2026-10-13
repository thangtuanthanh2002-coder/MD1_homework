
let str = "-12 abc -5 8 -20 hello 15";
let numbers = str.match(/-?\d+/g) || [];
let count = 0;

for (let i = 0; i < numbers.length; i++) {
    if (Number(numbers[i]) < 0) {
        count++;
    }
}

document.getElementById("result").textContent =
    "Chuỗi: " + str +
    ". Có " + count + " số nguyên âm.";