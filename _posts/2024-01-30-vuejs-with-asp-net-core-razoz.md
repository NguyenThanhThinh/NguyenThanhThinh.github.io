---
title: Sử dụng VueJ với ASP.NET CORE Razor có thể sẽ rất tuyệt !
categories: [js]
image: assets/img/vuejs/vuejs-net-core.jpg
language: .net core with vue js
description : VueJ with ASP.NET Razor could be great
tags: [js,netcore]
---

# Vuejs with Razoz

## 🔶 Vì sao sự kết hợp `vuejs với razoz thì "rất tuyệt"`

- `Tích hợp dễ dàng`: Vue.js có khả năng tích hợp tốt với các ứng dụng ASP.NET Core thông qua Razor. Bạn có thể tích hợp Vue.js dễ dàng vào các trang Razor mà không gặp vấn đề tương thích.

- `Phát triển phía client linh hoạt`: Vue.js là một thư viện JavaScript linh hoạt và dễ học, giúp phát triển phần giao diện người dùng một cách dễ dàng và hiệu quả. Các thành phần Vue.js có thể được tích hợp vào trang Razor để cải thiện trải nghiệm người dùng.

- `Single Page Applications (SPA)`: Vue.js thường được sử dụng để phát triển ứng dụng web đơn trang (SPA), nơi mà mọi thay đổi trang xảy ra mà không cần tải lại trang. Điều này cung cấp trải nghiệm người dùng mượt mà và nhanh chóng.

- `Dữ liệu động và tương tác tốt`: Vue.js hỗ trợ khả năng tương tác với dữ liệu động, điều này rất hữu ích khi bạn làm việc với các ứng dụng web ASP.NET Core cần tương tác với dữ liệu từ máy chủ.

- `Phân tách trách nhiệm`: Razor thường được sử dụng để xử lý logic máy chủ, trong khi Vue.js chịu trách nhiệm xử lý phần giao diện người dùng và logic máy khách. Điều này giúp tách biệt rõ ràng giữa phần giao diện và phần xử lý dữ liệu.

- `Hiệu suất cao`: Vue.js cung cấp các cơ chế hiệu suất như virtual DOM để giảm độ trễ và tối ưu hóa cập nhật DOM. Điều này đặc biệt quan trọng khi xây dựng các ứng dụng web đòi hỏi hiệu suất cao.

- `Cộng đồng lớn và hỗ trợ đa dạng`: Vue.js có một cộng đồng lớn và đa dạng, cung cấp nhiều tài nguyên và hỗ trợ cho những người phát triển ASP.NET Core sử dụng Vue.js.

> Tóm lại, sự kết hợp giữa `Vue.js và Razor trong ASP.NET Core` giúp tận dụng sức mạnh của cả hai để xây dựng ứng dụng web mạnh mẽ, linh hoạt và hiệu suất cao.


## 🔶 Demo

- Tạo project asp net core mvc ( ở đây mình dùng `.net core 8`)
![net-core](\assets\img\vuejs\create-project.png)
- Sử dụng Parcel [Parcel](https://parceljs.org/docs/) để biên dịch js
- Tạo file packages.json ở project.
![package](\assets\img\vuejs\package.png)
   
```js

"name": "demo-thinh",
  "version": "1.0.0",
  "devDependencies": {
    "@vue/component-compiler-utils": "^3.0.2",
    "parcel-bundler": "^1.12.5",
    "vue": "^2.6.10",
    "vue-custom-element": "^3.2.10",
    "vue-template-compiler": "^2.6.10"
  },
  "scripts": {
    "build": "parcel build ./wwwroot/js/site.js --out-dir ./wwwroot/js/dist"
  }

```
- Để chạy Parcel, chúng ta cần sửa đổi .csproj.
  
  ![csproj](\assets\img\vuejs\csproj.png)
  
```cs
<Target Name="Parcel" BeforeTargets="Build">
    <Exec Command="npm run build" />
</Target>
```
> Khi chương trình được build thì những file script cũng sẽ build.

- Tạo component `HelloWord`
    ![component](\assets\img\vuejs\component.png)

```js
<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
    </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'Hello Thinh Nguyen'
    };
  }
};
</script>

```

- Để sử dụng component `HelloWord` vừa tạo ta cần `đăng ký` chúng
được thực hiện file site.js ( Tùy theo mọi cách của mỗi người không nhất thiết phải là file site.js)

  ![csproj](\assets\img\vuejs\rd.png)

```js
import Vue from 'vue';
import vueCustomElement from 'vue-custom-element'
import helloWorld from './components/helloworld'

Vue.use(vueCustomElement);

Vue.customElement('hello-world', helloWorld);

```

- Sau đó thực hiện build chương trình sẽ tạo ra một thư mục `dist` như hình
  ![csproj](\assets\img\vuejs\js-build.png)


- `Sử dụng component ở view razoz của project`
  
  ![csproj](\assets\img\vuejs\dy.png)

 ```js
@{
    ViewData["Title"] = "Home Page";
}

<div class="text-center">
    <hello-world></hello-world>

</div>
@section Scripts {
    <script src="~/js/dist/site.js" asp-append-version="true"></script>
}
 ```

-`Kết quả `

  ![csproj](\assets\img\vuejs\result.png)

> Đây là cách mình tìm hiểu để có thể kết hợp ngôn ngữ razoz của `asp net core mvc với vuejs ( viết theo dạng component) vào project`.

Mọi người có cách setup nào hay ghi ra comment hoặc xin link tham khảo nhé.

