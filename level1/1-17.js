function solution(arr, divisor) {
  const newArr = arr
    .filter((e) => e % divisor === 0)
    .sort((a, b) => {
      return a - b;
    });

  return newArr.length === 0 ? [-1] : newArr;
}

console.log(solution([2, 36, 1, 3], 1));

[5, 9, 7, 10];
