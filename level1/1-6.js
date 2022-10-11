// 정수 제곱근 판별

function solution(n) {
  const x = Math.sqrt(n);
  if (x % 1 === 0) {
    return (x + 1) ** 2;
  } else {
    return -1;
  }
}

console.log(solution(3));
