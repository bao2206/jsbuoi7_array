var a = [];

document.getElementById("btnThemSo").onclick = function () {
  var number = document.getElementById("txtArray").value * 1;

  a.push(number);
  getEle("footerArray").innerHTML ="["+ a+"]";
};

function getEle(id) {
  return document.getElementById(id);
}

//Câu 1
getEle("btnTongSoDuong").onclick = function () {
  var sum = 0,
    i,
    kq = "";
  for (i = 0; i < a.length - 1; i++) {
    if (a[i] > 0) {
      sum += a[i];
    }
  }

  kq += "Tổng các số dương có trong mảng là: " + sum;
  getEle("footerSoDuong").innerHTML = kq;
};

//Câu 2
getEle("btnDemSoDuong").onclick = function () {
  var count = 0,
    i,
    kq = "";
  for (i = 0; i < a.length - 1; i++) {
    if (a[i] > 0) count++;
  }

  kq += "Trong mảng có tất cả " + count + " số dương";
  getEle("footerTongSoDuong").innerHTML = kq;
};

//Câu 3
getEle("btnMin").onclick = function () {
  var min = a[0];
  var kq = "";

  for (var i = 0; i < a.length - 1; i++) {
    if (a[i] < min) {
      a[i] = min;
    }
  }

  kq += "Số nhỏ nhất có trong mảng là " + min;
  getEle("footerMin").innerHTML = kq;
};

//Câu 5
getEle("btnLastEven").onclick = function () {
  var num = -1;
  var kq = "";
  for (var i = a.length - 1; i > -1; i--) {
    if (a[i] % 2 === 0) {
      if (num === -1) num = a[i];
    } else if (a[i] > a[num]) num = a[i];
  }

  kq += "Số chẵn cuối cùng trong mảng là " + num;
  getEle("footerLastEven").innerHTML = kq;
};

//Câu 7
getEle("btnSapXepTang").addEventListener("click", function () {
  var tmp = 0;
  for (var i = 0; i < a.length - 1; i++) {
    for (var j = i + 1; j < a.length; j++) {
      if (a[i] > a[j]) {
        tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
      }
    }
  }
  console.log(" " + a);
  document.getElementById("footerSapXep").innerHTML =
    "Mảng sắp xếp theo thứ tự tăng dần" + a;
});
//Câu 8

getEle("btnFirstPrime").onclick = function () {
  var kq = 0;
  for(i = 0; i < a.length; i++){
    var count = 0;
    var check = a[i];
    for(j = 2; j <= Math.sqrt(check); j++){
      if(check % j === 0){
        count++;
      }
    }
    if(count === 0 && check > 1){
      kq +=  check;
      break;
    }else if(count === 1){
      kq = -1;
    }
  }
  getEle("footerFirstPrime").innerHTML = kq;
};

//Câu 4

getEle("btnFindMinPos").onclick = function () {
  var kq = "";
  var minPos = 0;
  for (var i = 0; i < a.length; i++) {
    if (a[i] > 0) {
      minPos = a[i];
      break;
    }
  }
  if (minPos != 0) {
    for (var i = 0; i < a.length; i++)
      if (a[i] > 0 && a[i] < minPos) {
        minPos = a[i];
        kq += "Số dương nhỏ nhất là " + minPos;
      }
  } else {
    kq += "Trong mảng này không có phần tử nào là số dương";
  }
  getEle("footerMinPos").innerHTML = kq;
};

//Câu 9

getEle("btnN").onclick = function () {
  var count = 0;

  for (var i = 0; i < a.length; i++) {
    if (Number.isInteger(a[i]) == true) count ++;
  }

  getEle("footerSoNguyen").innerHTML = count;
};

//Câu 6
getEle("btnSwap").onclick = function(){
  var input_1 = getEle("txt1").value * 1;
  var input_2 = getEle("txt2").value * 1;
  var temp =  a[input_1];
  var res = '';
  if(input_1 < 0 || input_1 >=a.length) result = false;
  else if(input_2 < 0 || input_2 >=a.length) result = false;
  else{
    a[input_1] = a[input_2];
    a[input_2] = temp;
    res = a.join("");
  }
  getEle("footerSwap").innerHTML = res;
}
//Câu 10

getEle("btnCompare").onclick = function(){
  var countPositive = 0,  countNegative = 0, result = '', i;
  for(i = 0; i < a.length; i++)
  {
    if(a[i] > 0) countPositive ++;
    else countNegative ++;
  } 

  if(countPositive === countNegative) result = "Số dương bằng số âm";
  else if(countPositive > countNegative) result = "Số dương lớn hơn số âm";
  else result = "Số âm lớn hơn số dương";
  getEle("footerCompare").innerHTML = result;

}
