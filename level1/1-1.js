// 짝수와 홀수
function solution(num) {
  let answer;
  if (num % 2 === 0) {
    answer = "Even";
  } else {
    answer = "Odd";
  }
  return answer;
}

console.log(solution(5));

// 다른 풀이
function evenOrOdd(num) {
  return num % 2 ? "Odd" : "Even";
}
