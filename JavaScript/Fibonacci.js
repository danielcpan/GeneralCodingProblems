// const fib = num => {
  // if (num === 1) return 0;
  // if (num <= 2) return 1;

//   return fib(num-1) + fib(num-2)
// }

const fib2 = num => {
  const cache = [0,1]

  for (let i = 2 ; i < num; i++) {
    cache[i] = cache[i-1] + cache[i-2];
  }

  return cache[num-1];
}
