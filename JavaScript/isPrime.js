const isPrime = num => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false
  }

  return true;
}

console.log(isPrime(11));

const str = 'HelloMan'
console.log(str.split('').reverse().join(''))
