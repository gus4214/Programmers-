const fuc = (x) => {
  for (let i = 2; i <= Math.sqrt(x); i++) {
    if (x % i === 0) return false;
  }
  return true;
};

function solution(number) {
  let answer = 0;
  for (let i = 2; i <= number; i++) {
    if (fuc(i)) answer++;
  }
  return answer;
}

console.log(solution(5));
