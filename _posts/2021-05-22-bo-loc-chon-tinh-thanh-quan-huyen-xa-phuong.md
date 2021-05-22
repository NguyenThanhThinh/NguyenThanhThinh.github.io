---
title: Bộ lọc thay đổi Tỉnh Thành, Quận huyện, Xã phường
categories: [javascript]
image: assets/img/js/result.png
description : filter city district ward js, bộ lọc tỉnh thành js, javascript change district, js change district
tags: [featured]
---
Đã lâu rồi mình không có làm website nói thật chứ mình thích web lắm mà không có cơ hội làm với nhiều lý do abcxyz :) . rãnh nên mình viết bài về web này nọ cho `có đam mê` lại với nghề ::))
Mình thấy bộ lọc này thường được sử dụng ở những website mình sẽ làm về nó từ giao diện đến cách xử lý nè :)) sử dụng `javascript` cơ bản và một số cú pháp `js mới` nhé ^^

Mình sử dụng `bootstrap 5` để làm giao diện . `cái nào mới là mình tò mò haha`

![js, javascript](\assets\img\js\ui-city.png)

```html
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
    <title>Bộ lọc thay đổi tỉnh thành quận huyện phường xã</title>
  </head>
  <body>
    <div class="container">
      <div class="row justify-content-md-center p-2">
        <div class="col-md-auto">
          <select class="form-select form-select-sm mb-3" id="city" aria-label=".form-select-sm">
            <option value="" selected>Chọn tỉnh thành</option>           
          </select>
          
          <select class="form-select form-select-sm mb-3" id="district" aria-label=".form-select-sm">
            <option value="" selected>Chọn quận huyện</option>
          </select>

          <select class="form-select form-select-sm" id="ward" aria-label=".form-select-sm">
            <option value="" selected>Chọn phường xã</option>
          </select>
        </div>    
      </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.21.1/axios.min.js"></script>
  </body>
</html>
```
Giao diện mình đã làm xong, giờ thì mình sẽ đưa dữ liệu lên để hiển thị lên những `select option` này.
Thông thường thì sẽ là những api để đưa dữ liệu lên. Nhưng ở đây mình sẽ dùng `file json` mình kiếm được trên mạng [Truy cập vào để lấy file về nhé ](https://github.com/kenzouno1/DiaGioiHanhChinhVN/blob/master/data.json){:target="_blank"}.

Mình sẽ dùng thư viện `Axios` để lấy dữ liệu `file json` nhé. mình sử dụng *CDN* của nó `<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.21.1/axios.min.js"></script>`. 

Code thay đổi

```html
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
    <title>Bộ lọc thay đổi tỉnh thành quận huyện phường xã</title>
  </head>
  <body>
    <div class="container">
      <div class="row justify-content-md-center p-2">
        <div class="col-md-auto">
          <select class="form-select form-select-sm mb-3" id="city" aria-label=".form-select-sm">
            <option value="" selected>Chọn tỉnh thành</option>           
          </select>
          
          <select class="form-select form-select-sm mb-3" id="district" aria-label=".form-select-sm">
            <option value="" selected>Chọn quận huyện</option>
          </select>

          <select class="form-select form-select-sm" id="ward" aria-label=".form-select-sm">
            <option value="" selected>Chọn phường xã</option>
          </select>
        </div>    
      </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.21.1/axios.min.js"></script>
    <script src="/app.js"></script>
  </body>
</html>
```

Tiếp ta tạo file `app.js` sau khi tạo xong file `app.js` ta thêm code như sau vào file `app.js`

```js
var Parameter = {
    url: './data/vietnam.json',//Đường dẫn đến file chứa dữ liệu hoặc api do backend cung cấp
    method:'GET', //do backend cung cấp 
    responseType: 'application/json', //kiểu Dữ liệu trả về do backend cung cấp
}
//gọi ajax = axios => nó trả về cho chúng ta là một promise
var promise = axios(Parameter);
//Xử lý khi request thành công
promise.then(function(result) {
  console.log(result.data) 
});

```

kết quả như màn hình chúng ta đã thành công việc lấy dữ liệu về ::))) nói chứ làm ra là hứng thú nè haha, lập trình phải tò mò nhé mọi người không ra đừng nản nhé haha

![js, javascript](\assets\img\js\getdata.png)

Bây giờ là bước quan trọng nè ta sẽ đổ dữ liệu vào `DropDownList Tỉnh Thành`

Viết hàm `renderCity`

```js
function renderCity(data){
    for (const x of data) {
        citis.options[citis.options.length] = new Option(x.Name, x.Id);
    }
}
```
Code cập nhật 

```js
var citis = document.getElementById("city"); 
var districts = document.getElementById("district");  
var wards = document.getElementById("ward"); 

var Parameter = {
    url: './data/vietnam.json',//Đường dẫn đến file chứa dữ liệu hoặc api do backend cung cấp
    method:'GET', //do backend cung cấp 
    responseType: 'application/json', //kiểu Dữ liệu trả về do backend cung cấp
}
//gọi ajax = axios => nó trả về cho chúng ta là một promise
var promise = axios(Parameter);
//Xử lý khi request thành công
promise.then(function(result) {
  renderCity(result.data);
});

function renderCity(data){
    for (const x of data) {
        citis.options[citis.options.length] = new Option(x.Name, x.Id);
    }
}

```

Khi mình thay đổi tỉnh thành nào thì sẽ hiển thị quận huyện ra. Trong javascript mình sẽ dùng event `onchange` nhé

```js
function renderCity(data) {
  for (const x of data) {
    citis.options[citis.options.length] = new Option(x.Name, x.Id);
  }

  // xứ lý khi thay đổi tỉnh thành thì sẽ hiển thị ra quận huyện thuộc tỉnh thành đó
  citis.onchange = function () {
    district.length = 1;
    ward.length = 1;
    if(this.value != ""){
      const result = data.filter(n => n.Id === this.value);

      for (const k of result[0].Districts) {
        district.options[district.options.length] = new Option(k.Name, k.Id);
      }
    }
  };
 
}

```
Tương tự khi thay đổi quận huyện thì sẽ hiện thị phường xã

```js
 // xứ lý khi thay đổi quận huyện thì sẽ hiển thị ra phường xã thuộc quận huyện đó
  district.onchange = function () {
    ward.length = 1;
    const dataCity = data.filter((n) => n.Id === citis.value);
    if (this.value != "") {
      const dataWards = dataCity[0].Districts.filter(n => n.Id === this.value)[0].Wards;

      for (const w of dataWards) {
        wards.options[wards.options.length] = new Option(w.Name, w.Id);
      }
    }
  };
```

Cập nhật toàn bộ code file `app.js`

```js

var citis = document.getElementById("city");
var districts = document.getElementById("district");
var wards = document.getElementById("ward");
var Parameter = {
  url: "./data/vietnam.json", //Đường dẫn đến file chứa dữ liệu hoặc api do backend cung cấp
  method: "GET", //do backend cung cấp
  responseType: "application/json", //kiểu Dữ liệu trả về do backend cung cấp
};
//gọi ajax = axios => nó trả về cho chúng ta là một promise
var promise = axios(Parameter);
//Xử lý khi request thành công
promise.then(function (result) {
  renderCity(result.data);
});

function renderCity(data) {
  for (const x of data) {
    citis.options[citis.options.length] = new Option(x.Name, x.Id);
  }

  // xứ lý khi thay đổi tỉnh thành thì sẽ hiển thị ra quận huyện thuộc tỉnh thành đó
  citis.onchange = function () {
    district.length = 1;
    ward.length = 1;
    if(this.value != ""){
      const result = data.filter(n => n.Id === this.value);

      for (const k of result[0].Districts) {
        district.options[district.options.length] = new Option(k.Name, k.Id);
      }
    }
  };

   // xứ lý khi thay đổi quận huyện thì sẽ hiển thị ra phường xã thuộc quận huyện đó
  district.onchange = function () {
    ward.length = 1;
    const dataCity = data.filter((n) => n.Id === citis.value);
    if (this.value != "") {
      const dataWards = dataCity[0].Districts.filter(n => n.Id === this.value)[0].Wards;

      for (const w of dataWards) {
        wards.options[wards.options.length] = new Option(w.Name, w.Id);
      }
    }
  };
}
```
Thành quả 🤩🤩🤩🤩

![js, javascript](\assets\img\js\result.png)

*Do cấu trúc data mình vậy nên mình tùy biến lấy data . còn thực tế thì sẽ có những api cho riêng từng thằng tùy theo mỗi người viết hay ý đồ* nhưng logic cách xử lý thì tương tự. Lập trình thì mình tùy cơ ứng biến nhé ^^.  