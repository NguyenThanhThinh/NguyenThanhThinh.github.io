---
title: Những bài toán rèn luyện tư duy trong lập trình
categories: [javascript]
image: assets/img/js/algorithm1.png
language: jane
description : rèn luyện tư duy, logic trong lập trình, javascript 
tags: [featured]
---

Vấn đề rèn luyện tư duy khá là quan trọng trong lập trình. nếu mình không hiểu yêu cầu thì mình sẽ làm sai ::)) làm sai thì mình sẽ bị la haha

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

`Mình sẽ cập nhật từ từ`
