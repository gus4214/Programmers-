function solution(n, m) {
  let firstAnswer = 0;
  let secondAnswer = 0;
  let num = n > m ? n : m;
  for (let i = 1; i <= num; i++) {
    if (n % i === 0 && m % i === 0) {
      firstAnswer = i;
    }
  }
  secondAnswer = (n * m) / firstAnswer;

  return [firstAnswer, secondAnswer];
}

console.log(solution(6, 18));
