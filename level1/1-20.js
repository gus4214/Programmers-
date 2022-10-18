function solution(numbers) {
  const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (num.includes(numbers[i])) {
      result += numbers[i];
    }
  }
  return num.reduce((a, b) => a + b) - result;
}

console.log(solution([5, 8, 4, 0, 6, 7, 9]));
