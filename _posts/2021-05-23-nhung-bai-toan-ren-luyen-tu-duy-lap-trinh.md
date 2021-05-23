---
title: Những bài toán rèn luyện tư duy trong lập trình
categories: [javascript]
image: assets/img/js/algorithm1.png
language: jane
description : rèn luyện tư duy, logic trong lập trình, javascript 
tags: [featured]
---

Vấn đề rèn luyện tư duy khá là quan trọng trong lập trình. nếu mình không hiểu yêu cầu thì mình sẽ làm sai ::)) làm sai thì mình sẽ bị la haha. có những bài toán ta sẽ có nhiều cách giải khác nhau, nhưng cái quan trọng mình giải quyết được vấn đề thì  có cùi bắp cũng đừng quá lo lắng ::)) từ từ chúng ta sẽ tích lũy được kinh nghiệm và sẽ rút ra được kinh nghiệm cho chúng ta. `càng tò mò suy nghĩ thì ta sẽ làm ra được những cái hay` những lúc chán nản các bạn hãy nghĩ những lúc mình giải quyết được vấn đề nhé :)

## CÁC BƯỚC XÂY DỰNG CHƯƠNG TRÌNH

- `B1: Xác định yêu cầu.`
  + `Input (dữ liệu nhập)`
  + `Output (dữ liệu xuất)`
- `B2: Khảo sát nghiệp vụ (tìm công thức tính toán)`
- `B3: Xây dựng giải thuật`
- B4: Xây dựng chương trình (sử dụng 1 ngôn ngữ lập trình để thể hiện ra)
- B5: Kiểm lỗi và chạy chương trình

### Bài 1: Viết một chương trình tính tổng phần tử đầu tiên và phần tử cuối cùng của mảng.

Ví dụ : **Input** của mình là `[3,10,20]` thì sẽ ra **Ouput** kết quả là  `23`

```js
function Calculate(inputArr){
    let first = Number(inputArr[0]);
    let last = Number(inputArr[inputArr.length-1]);

    function calcSum(firs,second) {
        return firs + second;
    }
    let sum=calcSum(first,last);

    console.log(sum);
}

// gọi hàm
Calculate([3,10,20]); // kết quả 23 hihi
```

### Bài 2: Viết chương trình kiểm tra xem năm phải là năm nhuận hay không?
`Năm nhuận là năm có thể chia hết cho 4 nhưng không chia hết cho 100 hoặc chia hết cho 400`

```js
function isLeapYear ([year]) {
    year = Number(year);
    let isLeap = false;
    if((year%4==0 && year%100!=0) || year%400==0){
        isLeap=true;
    }

    if (isLeap){
      console.log("yes")
    }else{
        console.log("no")
    }
}
```
### Bài 3 : Viết hàm tìm số lớn hơn trong 2 số nguyên nhập vào

`Cách 1: : Dùng hàm if để so sánh và trả về giá trị lớn hơn trong 2 số`
```js
function Max( number1, number2)
{
    if(number1>number2)
    return number1;
    else
    return number2;

}
```
`Cách 2: Khai báo thêm biếm max để nhận giá trị lớn hơn trong 2 số và trả về giá trị củabiến max này`

```js
function Max( number1, number2)
{
    var max;
    if(number1>number2)
     max = number1;
    else
     max =number2;
    return max
}
```
`Cách 3: Dùng toán tử biểu thức điều kiện để so sánh giá trị của 2 số và trả về giá trị số lớn hơn`

```js
function Max( number1, number2)
{
   return (number1>number2)?number1:number2;
}
```
`Mình sẽ cập nhật từ từ`
