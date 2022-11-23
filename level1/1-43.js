function solution(n) {
  const num = new Set(n);
  const half = n.length / 2;
  return num.size > half ? half : num.size;
}

console.log(solution([3, 1, 2, 3]));
