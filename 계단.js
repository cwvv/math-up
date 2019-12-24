var a = +prompt("Number in!");
var z = a;
var b = 0;
var c;
var d = a + 2;
var f = a + 2;

while (d > 0) {             //박스 윗줄
  document.write("-");
  d--;
}

document.write("<br>");

while (z > b) {             //n까지의 계단
  c = 0;
  document.write("|");      //박스 왼쪽줄
  while (z > c) {
    if (b > c) {
      document.write(".");
    } else {
      document.write("*");
    }
    c++;
  }
  document.write("|");      //박스 오른쪽줄
  document.write("<br>");
  b++;
}

document.write("|");
while (a > 0) {             //+1의 계단
  document.write(".");
  a--;
}
document.write("|");

document.write("<br>");

while (f > 0) {             //박스 아랫줄
  document.write("-");
  f--;
}

//*****
//.****
//..***
//...**
//....*
//.....

//조건
//1. 입력하는 값이 n개라면 처음에 *이 n개가 나타나야 한다.
//2. 즉, 0부터 n까지 "."이 줄의 바뀜에 따라 차례대로 나타나야 한다.
//3. 위의 조건이 성립하면 줄의 수는 n+1이 된다.
