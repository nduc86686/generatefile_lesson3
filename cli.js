#!/usr/bin/env node
//Lưu ý rằng dòng đầu tiên #!/usr/bin/env node cho phép hệ thống biết rằng đây là một tệp lệnh Node.js.
console.log('Hello, world!');
const fs = require('fs');
const path = require('path');

// Lấy đối số dòng lệnh
const args = process.argv.slice(2);
const functionName = args[0];

// Tên thư mục template
const templateDir = 'templates';

// Tạo thư mục mới với tên chức năng
const newDir = path.join(__dirname, functionName);

fs.mkdirSync(newDir);

// Sao chép toàn bộ nội dung của thư mục template vào thư mục mới
const filesToCreate = fs.readdirSync(templateDir);

filesToCreate.forEach(file => {
    const origFilePath = path.join(templateDir, file);

    // Đường dẫn của tệp tin mới
    const newFilePath = path.join(newDir, file);

    // Kiểm tra xem đường dẫn hiện tại là một thư mục hay một tệp tin
    const isDirectory = fs.statSync(origFilePath).isDirectory();

    // Nếu đường dẫn hiện tại là một thư mục, tạo thư mục mới và sao chép toàn bộ nội dung của thư mục này
    if (isDirectory) {
        fs.mkdirSync(newFilePath);
        const filesInDir = fs.readdirSync(origFilePath);
        filesInDir.forEach(fileInDir => {
            const origFilePathInDir = path.join(origFilePath, fileInDir);
            const newFilePathInDir = path.join(newFilePath, fileInDir);
            const contentsInDir = fs.readFileSync(origFilePathInDir, 'utf8');
            fs.writeFileSync(newFilePathInDir, contentsInDir, 'utf8');
        });
    } else {
        // Nếu đường dẫn hiện tại là một tệp tin, đọc nội dung của tệp tin và thay thế các tên thư mục và tệp tin trong nội dung tệp tin mới
        let contents = fs.readFileSync(origFilePath, 'utf8');
        contents = contents.replace(/template/g, functionName);
        fs.writeFileSync(newFilePath, contents, 'utf8');
    }
});

console.log('Thư mục mới đã được tạo thành công!');
