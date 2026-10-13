function isPalindrome(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    if (str === reversed) {
        return true;
    } else {
        return false;
    }
}
let str = prompt("Nhập chuỗi cần kiểm tra:");
if (str !== null) {
    if (isPalindrome(str)) {
        alert("Đây là chuỗi đối xứng");
    } else {
        alert("Đây không phải chuỗi đối xứng");
    }
}