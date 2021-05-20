---
title: Giới thiệu .NET Core
tags: [asp net core,asp net,.net core"]
author: Thinh Nguyen
description: giới thiệu .net core, asp net core, .net,c#
---


# 1. Giới thiệu .NET Core

Microsoft .NET Core là một framework miễn phí, mã nguồn mở được phát triển dựa vào
.NET Framework, đa nền tảng (cross-platform – có thể chạy trên Windows, Linux, MacOS),
nhanh, nhẹ và hiện đại dùng để xây dựng ứng dụng di động, web, Windows desktop, Mac,
gaming, machine learning & AI, IoT chạy trên được nhiều hệ điều hành Windows, Linux.

Trước khi bắt đầu viết code, bạn phải cài đặt .NET Core và các công cụ liên quan trên
máy [Truy cập vào trang web](https://www.microsoft.com/net/download/). Có 3 cách để xây dựng
ứng dụng .NET Core: sử dụng command line (CLI), Visual Studio Code và Visual Studio

## 1.1 Các khái niệm cơ bản

### 1.1.1 Tạo ứng dụng đầu tiên

Mở Visual Studio lên, tạo mới Project, chọn template là **.NET Core** bên trái, chọn ứng dụng
dạng **Console App** và đặt tên project.

### 1.1.2 Cấu trúc chương trình

Bắt đầu từ chương trình “Day1” đơn giản trong C#:

```cs
using System;

namespace Day1
{
	class Program
	{
		static void Main(string[] args)
		{
			Console.WriteLine("Hello World!");
		}
	}
}

```

**Giải thích**
-  Phần đầu của chương trình là các khai báo thư viện với từ khóa `using`, theo sau là tên
của thư viện cần khai báo.
-  Toàn bộ chương trình được `đóng gói` trong một `namespace`. Bạn sẽ rõ hơn về
`namespace` trong các phần sau.
- Bản thân chương trình trong *C#* là một lớp `class`, như bạn thấy, có tên là `Program`. Lớp
này chứa hàm `Main`  điểm bắt đầu của chương trình.
- Hàm `Main` ở trên chỉ chứa duy nhất một câu lệnh: 
```cs
Console.WriteLine("Hello World!");
```

Để viết ra màn hình dòng chữ: `HelloWorld`

Gõ tổ hợp phím `CTRL+F5` để chạy chương trình, bạn sẽ được kết quả:

![asp net core,c#](\assets\img\netcore\result.png)

``` ....Còn tiếp.... ```




