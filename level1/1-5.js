// 자연수 뒤집어 배열로 만들기

const solution = (n) => {
  return String(n)
    .split("")
    .map((index) => index * 1)
    .reverse();
};

console.log(solution(12345));
