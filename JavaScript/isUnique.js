const isUnique = str => {
  const unique = new Set()

  for (let i = 0; i < str.length; i++) {
    const letter = str[i];
    if (unique.has(letter)) return false;
    unique.add(letter)
  }
  return true;
}

console.log(isUnique('hello'))
console.log(isUnique('boy'))

