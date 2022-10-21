function solution(left, right) {
  const service = (num) => {
    let arr = [];
    for (let i = 1; i <= num; i++) {
      num % i === 0 ? arr.push(i) : "";
    }
    return arr.length % 2 === 0 ? num : -num;
  };

  let answer = 0;

  for (let i = left; i <= right; i++) {
    answer += service(i);
  }

  return answer;
}

console.log(solution(13, 17));
