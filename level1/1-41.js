function solution(numbers) {
  let arr = [];
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      arr.push(numbers[i] + numbers[j]);
    }
  }
  const result = new Set(arr);
  return [...result].sort((a, b) => {
    return a - b;
  });
}

console.log(solution([5, 0, 2, 7]));
