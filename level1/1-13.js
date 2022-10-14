function solution(num) {
  let result = 0;
  while (num != 1) {
    if (num % 2 == 0) {
      num /= 2;
    } else {
      num = num * 3 + 1;
    }
    result++;
  }
  return result >= 500 ? -1 : result;
}
console.log(solution(6));
