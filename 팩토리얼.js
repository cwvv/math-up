var num = prompt("팩토리얼 계산기")

function fact(num) {
  if(num < 2) return num;

  return num*fact(num-1)
}

document.write(fact(num));
