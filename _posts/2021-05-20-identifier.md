---
layout: post
title:  "Định danh"
language: jane
categories: [c#]
image: assets/img/netcore/identifier.jpg
description : identifier c#, c# định danh
tags: [c#]
---

#### Định danh (identifier)

Định danh được sử dụng để đặt cho các đối tượng trong chương trình như: tên biến, tên
kiểu dữ liệu, tên hàm, tên lớp, tên thuộc tính,...

Ngôn ngữ lập trình cũng giống như ngôn ngữ tự nhiên, chúng đều có cú pháp và ngữ
nghĩa. Do đó việc đặt tên cho các đối tượng trong chương trình là rất quan trọng, làm sao phải
đảm bảo được hai yếu tố: `đúng cú pháp và dễ đọc`.

**Quy tắc đặt tên:**
- Tên (định danh – identifier) là một chuỗi kí tự bắt đầu bằng một chữ cái hoặc dấu gạch
nối `"_"`, được dùng để đặt cho các đối tượng trong chương trình (như lớp, thuộc tính,
phương thức, biến, kiểu dữ liệu,...).
- C# phân biệt chữ in hoa và in thường.

```
Chú ý:
    - Tên không được bắt đầu bằng một chữ số.
    - Tên không được trùng với từ khóa.
    - Tên không được chứa khoảng trắng
```
Ví dụ: đặt tên như sau là `sai` cú pháp:

```cs
int class = 3; //tên trùng với từ khóa(class)
double 1abc = 12.3; //tên bắt đầu bằng chữ số 1
```

Trong việc đặt tên ngoài những quy tắc bắt buộc, các lập trình viên thường tìm cách đặt
tên sao cho `dễ đọc và phải có ý nghĩa`. 

[Truy cập vào đây để hiểu rõ các quy tắc ](https://github.com/ktaranov/naming-convention)