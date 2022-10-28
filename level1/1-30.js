function solution(arr) {
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    arr[i] !== arr[i + 1] ? answer.push(arr[i]) : null;
  }
  return answer;
}

console.log(solution([1, 1, 8]));
