var a = prompt("Number in!")
var z = a;
var b = 0;
var c;

while (z > b) {
  c = 0;
  while (z > c) {
    if (b > c) {
      document.write(".");
    } else {
      document.write("*");
    }
    c++;
  }
  document.write("<br>");
  b++;
}

while (a > 0) {
  document.write(".");
  a--;
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
