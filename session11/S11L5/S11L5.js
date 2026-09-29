let weight = Number(prompt("Nhập cân nặng (kg):"));
let height = Number(prompt("Nhập chiều cao (m):"));

let bmi = weight / (height * height);

if (bmi < 18.5) {
    alert("BMI = " + bmi.toFixed(1) + "\nPhân loại: Cân nặng thấp (gầy)");
} else if (bmi < 25) {
    alert("BMI = " + bmi.toFixed(1) + "\nPhân loại: Bình thường");
} else if (bmi < 30) {
    alert("BMI = " + bmi.toFixed(1) + "\nPhân loại: Tiền béo phì");
} else if (bmi < 35) {
    alert("BMI = " + bmi.toFixed(1) + "\nPhân loại: Béo phì độ I");
} else if (bmi < 40) {
    alert("BMI = " + bmi.toFixed(1) + "\nPhân loại: Béo phì độ II");
} else {
    alert("BMI = " + bmi.toFixed(1) + "\nPhân loại: Béo phì độ III");
}