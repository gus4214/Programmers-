const solution = (n) => {
  const arr = n.toString().split("");
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i] * 1;
  }
  return result;
};

console.log(solution(123));

// 자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
// 예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.

// 다른풀이

// const solution = n => n.toString().split("").reduce((acc, num)=> acc+parseInt(num,10), 0);
