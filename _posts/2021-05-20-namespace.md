---
layout: post
title:  "Không gian tên"
language: netcore
categories: [c#]
image: assets/img/netcore/namespace.png
description : c#, namespace, asp net core, không gian tên c#
tags: [featured,c#]
---
![asp net core,c#,namespace](\assets\img\netcore\architecture.png)

.NET Framework cung cấp một thư viện các lớp đồ sộ, có tên là FCL (Framework Class
Library). Trong đó Console chỉ là một lớp nhỏ trong hàng ngàn lớp trong thư viện. Mỗi lớp có
một tên riêng, vì vậy FCL có hàng ngàn tên như `ArrayList, Dictionary, FileSelector,…`

Điều này làm nảy sinh vấn đề, người lập trình không thể nào nhớ hết được tên của các
lớp trong .NET Framework. Tệ hơn nữa là sau này có thể ta tạo lại một lớp trùng tên với lớp đã
có chẳng hạn. Ví dụ trong quá trình phát triển một ứng dụng ta cần xây dựng một lớp từ điển và
lấy tên là `Dictionary`, và điều này dẫn đến sự tranh chấp khi biên dịch vì C# chỉ cho phép một
tên duy nhất. Khi đó chúng ta phải đổi tên của lớp từ điển mà ta vừa tạo thành một cái tên khác
chẳng hạn như `myDictionary`. Do đó sẽ làm cho việc phát triển các ứng dụng trở nên phức tạp,
cồng kềnh. Đến một sự phát triển nhất định nào đó thì chính là cơn ác mộng cho nhà phát triển.

Để giải quyết vấn đề này là ta tạo ra một `namespace`. **Namsespace** sẽ hạn chế phạm vi
của một tên, làm cho tên này chỉ có ý nghĩa trong vùng đã định nghĩa. Các *namespace* để phân
thành các vùng cho các lớp trùng tên không tranh chấp với nhau.

Một ví dụ về `namespace`

```cs
using System;
namespace namespaces
{
    class Program
    {
        static void Main(string[] args)
        {
             System.Console.WriteLine("Hello World!");
        }
    }
}

namespace SampleNamespace
{
    class SampleClass
    {
        public void SampleMethod()
        {
            System.Console.WriteLine("SampleMethod inside SampleNamespace");
        }
    }
}
```