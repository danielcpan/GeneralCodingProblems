// Dynamic Programming N
const climbStairs = n => {
  const cache = [];
  cache[0] = 0;
  cache[1] = 1
  
  for (i = 2; i <= n+1; i++) {
    cache[i] = cache[i-1] + cache[i-2]; 
  }
  
  return cache[n+1];
};

console.log(climbStairs(3))