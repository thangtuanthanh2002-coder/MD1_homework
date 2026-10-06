let students = [
      {
        name: "Nguyễn Văn A",
        age: 20,
        id: "SV01"
    },
    {
        name: "Trần Thị B",
        age: 21,
        id: "SV02"
    },
    {
        name: "Lê Văn C",
        age: 19,
        id: "SV03"
    }
];
function addStudent() {
    let name = prompt("Nhập tên sinh viên:");
    let age = Number(prompt("Nhập tuổi:"));
    let id = prompt("Nhập mã sinh viên:");

    let student = {
        name: name,
        age: age,
        id: id
    };

    students.push(student);

    alert("Đã thêm sinh viên thành công!");
}
function showStudents() {
    let result = document.getElementById("result");

    if (students.length === 0) {
        result.innerHTML = "Danh sách sinh viên đang trống.";
        return;
    }

    let html = "<h2>Danh sách sinh viên</h2>";

    for (let i = 0; i < students.length; i++) {
        html += `
            <p>
                ID: ${students[i].id} |
                Tên: ${students[i].name} |
                Tuổi: ${students[i].age}
            </p>
        `;
    }

    result.innerHTML = html;
}
function deleteStudent() {
    let id = prompt("Nhập ID của sinh viên cần xóa:");

    let index = students.findIndex(function(student) {
        return student.id === id;
    });

    if (index !== -1) {
        students.splice(index, 1);

        alert("Đã xóa sinh viên thành công!");
        showStudents();
    } else {
        alert("Không tìm thấy sinh viên có ID: " + id);
    }
}