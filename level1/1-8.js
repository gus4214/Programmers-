function solution(x) {
  const sum = x
    .toString()
    .split("")
    .reduce((a, b) => a * 1 + b * 1);

  return x % sum === 0 ? true : false;
}

console.log(solution(13));

// 다른 풀이

function solution(x) {
  return !(x % (x + "").split("").reduce((a, b) => +a + +b));
}
