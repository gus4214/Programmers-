function solution(a, b) {
  let arr = [];
  if (a < b) {
    for (let i = a; i <= b; i++) {
      arr.push(i);
    }
  } else if (a > b) {
    for (let i = b; i <= a; i++) {
      arr.push(i);
    }
  } else if (a === b) {
    return a;
  }
  return arr.reduce((prevNum, currNum) => prevNum + currNum);
}

console.log(solution());
