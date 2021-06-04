---
title: Truyền dữ liệu sử dụng nhiều đối tượng từ controller sang view trong asp net mvc
categories: [netcore]
image: assets/img/netcore/mvc.gif
language: js
description : pass data controller to view asp net
tags: [featured]
---
Bài toán đặt ra giả sử bạn có một `trang` muốn hiển thị nào là `sản phẩm mới nhất`, `sản phẩm mua nhiều` , `sản phẩm nổi bật`. 

Đơn giản thôi mà mình sẽ dùng `ViewBag` ,`ViewData`,`TempData` cũng được mà liệu có là cách hay không :) theo mình nó không tốt vì khi sang view mình phải ép lại kiểu này nọ mình thấy hơi phiền. Cách mình làm như sau:

 - Mình sẽ tạo một `ViewModel`

 - Mình sẽ dùng `Tuple`

`let'go nào`

Đầu tiên mình tạo một project asp net mvc ở đây mình tạo bằng net core nhé.

Đầu tiên mình tạo `class` `Product`

```cs
    public class Product
	{
		public int Id { get; set; }
		public string Name { get; set; }

		public decimal Price { get; set; }

		public bool? IsLike { get; set; }

		public string Image { get; set; }

		public DateTime CreateDate { get; set; }
	}
```
ở controller mình tạo hàm dữ liệu danh sách sản phẩm

```cs

    public List<Product> GetProducts()
		{
			List<Product> list = new List<Product>();

			list.Add(new Product() { Id = 1, Name = "Samsung Galaxy S21 5G", Price = 10m, CreateDate = DateTime.Now.AddDays(-2), IsLike = false, Image = "https://cdn.tgdd.vn/Products/Images/42/220833/samsung-galaxy-s21-tim-600x600.jpg" });

			list.Add(new Product() { Id = 2, Name = "iPhone 12 64GB", Price = 12m, CreateDate = DateTime.Now.AddDays(-4), IsLike = false, Image = "https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-violet-1-600x600.jpg" });

			list.Add(new Product() { Id = 3, Name = "Xiaomi Redmi Note 10 5G 8GB", Price = 14m, CreateDate = DateTime.Now.AddDays(-5), IsLike = true, Image= "https://cdn.tgdd.vn/Products/Images/42/235971/xiaomi-redmi-note-10-5g-xanh-bong-dem-1-600x600.jpg" });

			list.Add(new Product() { Id = 4, Name = "OPPO A93", Price = 22m, CreateDate = DateTime.Now.AddDays(-8), IsLike = true, Image= "https://cdn.tgdd.vn/Products/Images/42/235971/xiaomi-redmi-note-10-5g-xanh-bong-dem-1-600x600.jpg" });

			return list;

		}
```

Mình muốn hiển thị danh sách sản phẩm mới nhất và danh sách sản phẩm yêu thích nhất trường hợp mình làm bằng `ViewModel` như sau

Tạo một `ViewModel` để hứng đối tượng sản phẩm mới nhất và yêu thích nhất

```cs
	public class HomeViewModel
	{
		public List<Product> ProductNews { get; set; }

		public List<Product> ProductLikes { get; set; }
	}
```
ở controller xử lý code như sau

```cs
    public IActionResult Index()
		{
			var listProductNew = GetProducts().OrderByDescending(n => n.CreateDate).ToList(); // sắp xếp để lấy sản phẩm mới nhất

			var listProductLike = GetProducts().Where(n => n.IsLike == true).ToList();

			var homeViewModel = new HomeViewModel();

			homeViewModel.ProductNews = listProductNew;

			homeViewModel.ProductLikes = listProductLike;

			return View(homeViewModel);
		}
```

Code ở `View`

```cs
@model WebApplication.ViewModels.HomeViewModel
@{
    ViewData["Title"] = "Trang chủ";
}
<div class="container">
    <h4>Danh sách sản phẩm mới nhất</h4>
    <div class="row">
        @foreach (var item in Model.ProductNews)
        {
            <div class="col-md-3">
                <div class="card">
                    <img class="card-img-top" src="@item.Image" alt="@item.Name">
                    <div class="card-body">
                        <h4 class="card-title">@item.Name</h4>
                        <p class="card-text">@item.Price.ToString("#,##") VNĐ</p>

                    </div>
                </div>

            </div>
        }
    </div>
    <h4>Danh sách sản phẩm yêu thích nhất</h4>
    <div class="row">
        @foreach (var item in Model.ProductLikes)
        {
            <div class="col-md-3">
                <div class="card">
                    <img class="card-img-top" src="@item.Image" alt="@item.Name">
                    <div class="card-body">
                        <h4 class="card-title">@item.Name</h4>
                        <p class="card-text">@item.Price.ToString("#,##") VNĐ</p>

                    </div>
                </div>

            </div>
        }
    </div>
</div>
```
## Trường hợp dùng `Tuple`.

Điều chỉnh code ở controller như sau

```cs
    public IActionResult Index()
		{
			var listProductNew = GetProducts().OrderByDescending(n => n.CreateDate).ToList();

			var listProductLike = GetProducts().Where(n => n.IsLike == true).ToList();

			var home = new Tuple<List<Product>, List<Product>>(listProductNew, listProductLike);

			return View(home);
		}
```

`Có thể tạo 2 viewmodel để hứng data nhé mình ở đây không có tạo`

Code `View` cập nhật 

```cs

@model Tuple<List<Product>, List<Product>>
@{
    ViewData["Title"] = "Trang chủ";
}


<div class="container">
    <h4>Danh sách sản phẩm mới nhất</h4>
    <div class="row">
        @foreach (var item in Model.Item1)
        {
            <div class="col-md-3">
                <div class="card">
                    <img class="card-img-top" src="@item.Image" alt="@item.Name">
                    <div class="card-body">
                        <h4 class="card-title">@item.Name</h4>
                        <p class="card-text">@item.Price.ToString("#,##") VNĐ</p>

                    </div>
                </div>

            </div>
        }
    </div>
    <h4>Danh sách sản phẩm yêu thích nhất</h4>
    <div class="row">
        @foreach (var item in Model.Item2)
        {
            <div class="col-md-3">
                <div class="card">
                    <img class="card-img-top" src="@item.Image" alt="@item.Name">
                    <div class="card-body">
                        <h4 class="card-title">@item.Name</h4>
                        <p class="card-text">@item.Price.ToString("#,##") VNĐ</p>

                    </div>
                </div>

            </div>
        }
    </div>
</div>
```
`Chạy lên xem kết quả nào 🤩🤩🤩🤩🤩🤩`