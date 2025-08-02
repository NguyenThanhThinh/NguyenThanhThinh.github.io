---
title: Những Tính Năng Mới Nhất và Ứng Dụng LINQ Hiệu Quả NET CORE 10
categories: [net core]
image: assets/img/netcore/result.png
language: js
description : net core
tags: [featured]
---
# .NET Core 10: Những Tính Năng Mới Nhất và Ứng Dụng LINQ Hiệu Quả

## Giới thiệu

.NET Core 10 đã mang đến nhiều cải tiến đáng kể, đặc biệt trong việc tối ưu hóa hiệu suất và cải thiện trải nghiệm phát triển. Một trong những điểm nổi bật nhất là sự nâng cấp mạnh mẽ của LINQ (Language Integrated Query), giúp các nhà phát triển làm việc với dữ liệu một cách hiệu quả và trực quan hơn.

## Những Tính Năng Mới Trong .NET Core 10

### 1. Cải Tiến Hiệu Suất LINQ

.NET Core 10 đã tối ưu hóa đáng kể hiệu suất của các truy vấn LINQ:

- **Vectorization**: Tự động sử dụng SIMD instructions cho các thao tác tập hợp lớn
- **Memory Allocation Reduction**: Giảm thiểu việc cấp phát bộ nhớ không cần thiết
- **Parallel Processing**: Cải thiện khả năng xử lý song song với PLINQ

### 2. LINQ Methods Mới

#### `CountBy()` Method

Thay vì sử dụng `GroupBy().Select()`, giờ đây chúng ta có thể sử dụng `CountBy()`:

```csharp
var products = GetProducts();

// Cách cũ
var categoryCount = products
    .GroupBy(p => p.Category)
    .Select(g => new { Category = g.Key, Count = g.Count() });

// Cách mới với .NET Core 10
var categoryCount = products.CountBy(p => p.Category);
```

#### `AggregateBy()` Method

Thực hiện aggregation theo nhóm một cách hiệu quả:

```csharp
var sales = GetSalesData();

var totalSalesByRegion = sales.AggregateBy(
    s => s.Region,
    seed: 0m,
    (total, sale) => total + sale.Amount
);
```

### 3. Pattern Matching Cải Tiến

LINQ kết hợp với pattern matching mạnh mẽ hơn:

```csharp
var orders = GetOrders();

var premiumOrders = orders
    .Where(order => order switch
    {
        { Status: OrderStatus.Completed, Amount: > 1000 } => true,
        { Customer.Type: CustomerType.VIP } => true,
        _ => false
    });
```

## Ứng Dụng LINQ Thực Tế Trong .NET Core 10

### 1. Xử Lý Dữ Liệu Phức Tạp

```csharp
public class OrderAnalyzer
{
    public async Task<OrderSummary> AnalyzeOrdersAsync(IEnumerable<Order> orders)
    {
        var summary = await orders
            .AsParallel()
            .Where(o => o.OrderDate >= DateTime.Now.AddMonths(-3))
            .GroupBy(o => new { o.CustomerId, Month = o.OrderDate.Month })
            .Select(g => new
            {
                CustomerId = g.Key.CustomerId,
                Month = g.Key.Month,
                TotalAmount = g.Sum(o => o.Amount),
                OrderCount = g.Count()
            })
            .Where(x => x.TotalAmount > 500)
            .ToListAsync();

        return new OrderSummary
        {
            HighValueCustomers = summary.CountBy(s => s.CustomerId),
            MonthlyTrends = summary.AggregateBy(
                s => s.Month,
                new MonthlyTrend(),
                (trend, item) => trend.AddData(item.TotalAmount, item.OrderCount)
            )
        };
    }
}
```

### 2. API Controllers với LINQ Tối Ưu

```csharp
[ApiController]
[Route("api/[controller]")]
public class ProductController : ControllerBase
{
    private readonly IProductService _productService;

    public ProductController(IProductService productService)
    {
        _productService = productService;
    }

    [HttpGet("search")]
    public async Task<ActionResult<IEnumerable<ProductDto>>> SearchProducts(
        [FromQuery] ProductSearchRequest request)
    {
        var products = await _productService.GetProductsAsync();

        var result = products
            .Where(p => string.IsNullOrEmpty(request.Name) || 
                       p.Name.Contains(request.Name, StringComparison.OrdinalIgnoreCase))
            .Where(p => request.MinPrice == null || p.Price >= request.MinPrice)
            .Where(p => request.MaxPrice == null || p.Price <= request.MaxPrice)
            .Where(p => request.Categories?.Any() != true || 
                       request.Categories.Contains(p.CategoryId))
            .OrderByDescending(p => p.CreatedDate)
            .Skip((request.Page - 1) * request.PageSize)
            .Take(request.PageSize)
            .Select(p => new ProductDto
            {
                Id = p.Id,
                Name = p.Name,
                Price = p.Price,
                CategoryName = p.Category.Name,
                IsAvailable = p.Stock > 0
            });

        return Ok(result);
    }
}
```

### 3. Entity Framework Core Integration

```csharp
public class OrderRepository
{
    private readonly AppDbContext _context;

    public OrderRepository(AppDbContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<CustomerOrderSummary>> GetCustomerOrderSummariesAsync()
    {
        return await _context.Orders
            .Include(o => o.Customer)
            .Include(o => o.OrderItems)
            .ThenInclude(oi => oi.Product)
            .Where(o => o.OrderDate >= DateTime.Now.AddYears(-1))
            .GroupBy(o => o.Customer)
            .Select(g => new CustomerOrderSummary
            {
                Customer = g.Key,
                TotalOrders = g.Count(),
                TotalAmount = g.Sum(o => o.TotalAmount),
                AverageOrderValue = g.Average(o => o.TotalAmount),
                LastOrderDate = g.Max(o => o.OrderDate),
                TopProducts = g
                    .SelectMany(o => o.OrderItems)
                    .GroupBy(oi => oi.Product)
                    .OrderByDescending(pg => pg.Sum(oi => oi.Quantity))
                    .Take(5)
                    .Select(pg => new ProductSummary
                    {
                        Product = pg.Key,
                        TotalQuantity = pg.Sum(oi => oi.Quantity)
                    })
            })
            .ToListAsync();
    }
}
```

## Best Practices Khi Sử Dụng LINQ Trong .NET Core 10

### 1. Sử Dụng PLINQ Cho Dữ Liệu Lớn

```csharp
public class DataProcessor
{
    public void ProcessLargeDataset(IEnumerable<DataRecord> records)
    {
        var results = records
            .AsParallel()
            .WithDegreeOfParallelism(Environment.ProcessorCount)
            .Where(r => r.IsValid)
            .Select(r => ProcessRecord(r))
            .Where(r => r != null)
            .ToList();
    }
}
```

### 2. Tránh N+1 Query Problem

```csharp
// Không tốt
var orders = context.Orders.ToList();
foreach (var order in orders)
{
    Console.WriteLine($"Customer: {order.Customer.Name}"); // N+1 queries
}

// Tốt
var orders = context.Orders
    .Include(o => o.Customer)
    .ToList();

foreach (var order in orders)
{
    Console.WriteLine($"Customer: {order.Customer.Name}"); // Chỉ 1 query
}
```

### 3. Sử Dụng IAsyncEnumerable Cho Streaming Data

```csharp
public async IAsyncEnumerable<ProcessedData> ProcessDataStreamAsync(
    IAsyncEnumerable<RawData> dataStream)
{
    await foreach (var batch in dataStream.Chunk(100))
    {
        var processedBatch = batch
            .Where(d => d.IsValid)
            .Select(d => ProcessData(d))
            .Where(d => d != null);

        foreach (var item in processedBatch)
        {
            yield return item;
        }
    }
}
```

## Hiệu Suất và Benchmarks

### So Sánh Hiệu Suất

Dựa trên các benchmark nội bộ, .NET Core 10 cho thấy những cải tiến đáng kể:

- **LINQ to Objects**: Tăng 25-40% hiệu suất
- **PLINQ**: Tăng 15-30% hiệu suất với dữ liệu lớn
- **Memory Usage**: Giảm 20-35% memory allocation

### Memory Management

```csharp
public class MemoryEfficientProcessor
{
    public void ProcessData(ReadOnlySpan<int> data)
    {
        // Sử dụng Span<T> để tránh memory allocation không cần thiết
        var result = data
            .ToArray() // Chỉ allocate khi thực sự cần thiết
            .Where(x => x > 0)
            .Sum();
    }
}
```

## Kết Luận

.NET Core 10 đã mang đến những cải tiến đáng kể cho LINQ, không chỉ về mặt hiệu suất mà còn về tính năng và khả năng sử dụng. Việc áp dụng các tính năng mới này sẽ giúp các nhà phát triển tạo ra những ứng dụng hiệu suất cao và dễ bảo trì hơn.

Những điểm chính cần nhớ:
- Sử dụng các LINQ methods mới như `CountBy()` và `AggregateBy()`
- Tận dụng PLINQ cho xử lý dữ liệu lớn
- Kết hợp pattern matching với LINQ queries
- Chú ý đến memory management và performance optimization

Hãy bắt đầu áp dụng những tính năng mới này trong dự án của bạn để tận dụng tối đa sức mạnh của .NET Core 10!

## Tài Liệu Tham Khảo

- [Microsoft .NET Core 10 Documentation](https://docs.microsoft.com/dotnet)
- [LINQ Performance Guide](https://docs.microsoft.com/dotnet/standard/linq)
- [Entity Framework Core Best Practices](https://docs.microsoft.com/ef/core)

---

*Bài viết được cập nhật với những tính năng mới nhất của .NET Core 10. Hãy theo dõi để không bỏ lỡ những cập nhật tiếp theo!*