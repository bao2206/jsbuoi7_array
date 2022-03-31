var a = [];

document.getElementById("btnThemSo").onclick = function () {
  var number = document.getElementById("txtArray").value * 1;

  a.push(number);
  console.log(a);
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
function snt(num) {
  if (num < 2) return 0;
  for (var i = 2; i < num; i++) {
    if (num % i === 0) return false;
    return true;
  }
}


getEle("btnFirstPrime").onclick = function () {
    var num = 0 ;
    var kq = '';
    for (var i = 0; i < a.length - 1; i++) {
        if (snt(a[i]) === true) num = a[i];
        else num = -1;
    }
    kq += "Số nguyên tố đầu tiên có trong mảng là " +num;
    
    document.getElementById("footerFirstPrime").innerHTML = kq;

};


//Câu 4 


getEle("btnFindMinPos").onclick = function(){
    var kq = '';
    var minPos = 0;
    for(var i = 0; i < a.length; i++)
    {
        if(a[i] > 0) 
        {
            minPos = a[i];
            break;
        }
    }
    if(minPos != 0)
    {
        for(var i = 0; i < a.length; i++)
        if(a[i] > 0 && a[i] < minPos)
        {
            minPos = a[i];
            kq += "Số dương nhỏ nhất là "+minPos;
        }
    }
    else {
        kq +="Trong mảng này không có phần tử nào là số dương";
    }
    getEle("footerMinPos").innerHTML = kq;
}