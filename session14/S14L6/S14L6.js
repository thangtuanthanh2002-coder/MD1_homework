let books = [
    {
        id: "S01",
        name: "JavaScript",
        author: "Nguyễn Văn A",
        year: 2023
    },
    {
        id: "S02",
        name: "HTML",
        author: "Trần Văn B",
        year: 2024
    },
    {
        id: "S03",
        name: "CSS",
        author: "Lê Văn C",
        year: 2026
    }
];

let choice;

do {
    choice = prompt(
        "--- QUẢN LÝ SÁCH ---\n\n" +
        "1. Thêm sách mới\n" +
        "2. Hiển thị danh sách sách\n" +
        "3. Tìm kiếm sách theo tên\n" +
        "4. Xóa sách theo ID\n" +
        "5. Thoát chương trình\n\n" +
        "Nhập lựa chọn:"
    );

    switch (choice) {
        case "1":

            let id = prompt("Nhập ID sách:");
            let name = prompt("Nhập tên sách:");
            let author = prompt("Nhập tác giả:");
            let year = Number(prompt("Nhập năm xuất bản:"));

            let book = {
                id: id,
                name: name,
                author: author,
                year: year
            };

            books.push(book);

            alert("Thêm sách thành công!");

            break;

        case "2":

            if (books.length === 0) {

                alert("Danh sách sách đang trống!");

            } else {

                let message = "--- DANH SÁCH SÁCH ---\n\n";

                for (let i = 0; i < books.length; i++) {

                    message +=
                        "ID: " + books[i].id + "\n" +
                        "Tên: " + books[i].name + "\n" +
                        "Tác giả: " + books[i].author + "\n" +
                        "Năm: " + books[i].year + "\n\n";
                }

                alert(message);
            }

            break;

        case "3":

            let keyword = prompt("Nhập tên sách cần tìm:");

            let found = false;

            for (let i = 0; i < books.length; i++) {

                if (
                    books[i].name
                        .toLowerCase()
                        .includes(keyword.toLowerCase())
                ) {

                    alert(
                        "Tìm thấy sách!\n\n" +
                        "ID: " + books[i].id + "\n" +
                        "Tên: " + books[i].name + "\n" +
                        "Tác giả: " + books[i].author + "\n" +
                        "Năm: " + books[i].year
                    );

                    found = true;
                }
            }

            if (found === false) {
                alert("Không tìm thấy sách!");
            }

            break;

        case "4":

            let deleteId = prompt("Nhập ID sách cần xóa:");

            let deleted = false;

            for (let i = 0; i < books.length; i++) {

                if (books[i].id === deleteId) {

                    books.splice(i, 1);

                    deleted = true;

                    alert("Đã xóa sách thành công!");

                    break;
                }
            }

            if (deleted === false) {
                alert("Không tìm thấy sách có ID: " + deleteId);
            }

            break;

        case "5":

            alert("Đã thoát chương trình!");

            break;

        default:

            alert("Lựa chọn không hợp lệ! Vui lòng chọn từ 1 đến 5.");
    }

} while (choice !== "5");