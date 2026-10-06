// BÀI 1
let a = Number(prompt("Bài 1 - Nhập số a:"));
let b = Number(prompt("Bài 1 - Nhập số b:"));

if (b === 0) {
    console.log("Không thể chia cho 0");
} else if (a % b === 0) {
    console.log(a + " chia hết cho " + b);
} else {
    console.log(a + " không chia hết cho " + b);
}
// BÀI 2
let age = Number(prompt("Bài 2 - Nhập tuổi:"));

if (age < 15) {
    console.log("Bạn chưa đủ tuổi vào học lớp 10");
} else {
    console.log("Bạn đủ điều kiện về tuổi để vào học lớp 10");
}

// BÀI 3
let number = Number(prompt("Bài 3 - Nhập một số nguyên:"));

if (number > 0) {
    console.log(number + " lớn hơn 0");
} else if (number < 0) {
    console.log(number + " nhỏ hơn 0");
} else {
    console.log("Số đó bằng 0");
}
// BÀI 4
let num1 = Number(prompt("Bài 4 - Nhập số thứ nhất:"));
let num2 = Number(prompt("Bài 4 - Nhập số thứ hai:"));
let num3 = Number(prompt("Bài 4 - Nhập số thứ ba:"));

let max = num1;

if (num2 > max) {
    max = num2;
}

if (num3 > max) {
    max = num3;
}

console.log("Số lớn nhất là: " + max);
// BÀI 5
let test = Number(prompt("Bài 5 - Nhập điểm bài kiểm tra:"));
let giuaky = Number(prompt("Bài 5 - Nhập điểm giữa kỳ:"));
let cuoiky
 = Number(prompt("Bài 5 - Nhập điểm cuối kỳ:"));

let average = (test + giuaky + cuoiky) / 3;

console.log("Điểm trung bình: " + average.toFixed(2));

if (average >= 90) {
    console.log("Xếp loại: Xuất Sắc");
} else if (average >= 80) {
    console.log("Xếp loại: Giỏi");
} else if (average >= 65) {
    console.log("Xếp loại: Khá");
} else if (average >= 50) {
    console.log("Xếp loại: Trung Bình");
} else {
    console.log("Xếp loại: Yếu");
}