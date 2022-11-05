function solution(d, budget) {
  let answer = 0;
  let num = 0;
  d.sort((a, b) => a - b);
  for (let i = 0; i < d.length; i++) {
    answer++;
    num += d[i];
    if (num > budget) {
      answer--;
    }
  }
  return answer;
}

console.log(solution([2, 2, 3, 3], 10));
