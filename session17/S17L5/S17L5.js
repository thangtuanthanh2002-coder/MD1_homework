const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");
loginBtn.addEventListener("click", function () {
    const username = usernameInput.value;
    const password = passwordInput.value;

    if (username === "huanrose@gmail.com" &&
        password === "123456") {
        alert("Đăng nhập thành công!");
    } else {
        alert("Đăng nhập thất bại!");
    }
});