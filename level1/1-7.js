// 문자열 내 p와 y의 개수

function solution(s) {
  let pCounter = 0;
  let yCounter = 0;
  const Upper = s.toUpperCase().split("");

  for (let i = 0; i < Upper.length; i++) {
    Upper[i] === "P" ? pCounter++ : Upper[i] === "Y" ? yCounter++ : null;
  }

  return pCounter === yCounter ? true : false;
}

console.log(solution("pPoooY"));

// 다른풀이

function solution(s) {
  return (
    s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length
  );
}
