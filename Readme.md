**A guide to creating NodeJs commands-line package**

- Các bước tạo 

  - Bước 1:Tạo gói NodeJs.js
    ```npm init```
  - Bước 2 Tạo tập lệnh dòng lệnh NodeJS
       Bạn có thể đã biết rằng chúng ta có thể thực thi tệp tập lệnh NodeJS bằng cách chạy: . Điều đó là tốt trong hầu hết các trường hợp, nhưng tập lệnh dòng lệnh NodeJS là một tệp JavaScript thông thường, ngoại trừ việc nó chứa một lệnh shell đặc biệt. Thông tin thêm về điều đó trong thời gian ngắn; trước tiên chúng ta hãy tạo một tệp JavaScript sẽ trở thành tập lệnh dòng lệnh NodeJS.``node script.js``  
    
    Trong file generate thêm dòng này vào dòng đầu tiên của file
    
    ```#!/usr/bin/env node```
  
  - Bước 3: Thêm dòng này trong file ``package.json``

    <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*gjBV1IwJ_BVgIJOyXqb02Q.png">

  - Bước 4: Trong Node.js, npm link là một công cụ được sử dụng để liên kết một package được phát triển cục bộ với một ứng dụng hoặc package khác trên cùng một máy tính. Nó cho phép bạn phát triển các package một cách độc lập trên một thư mục và sử dụng chúng trong các ứng dụng khác mà không cần phải đăng ký và cài đặt chúng từ npm registry.
     chạy.
    
    chạy lệnh như sau để cài:
    
    ``npm link``
    
    ```npm link bin package.json npm link npm link```

**Sau khi thiết lập xong có thể chạy dòng lệnh nodejs với tên của nó**

<image src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*dDgzaXKqVjVLFaBCbuG3CQ.png">
    