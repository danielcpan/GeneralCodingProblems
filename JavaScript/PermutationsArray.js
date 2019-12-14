const getPermutations = arr => {
  const permutations = [];

  if (arr.length === 1) {
    permutations.push(arr);
    return permutations;
  }
  for (let i = 0; i < arr.length; i++) {
    const firstNum = arr[i];
    const remaining = [...arr.slice(0,i), ...arr.slice(i+1, arr.length)]
    const otherPermutations = getPermutations(remaining);
    otherPermutations.forEach(perm => {
      permutations.push([firstNum, ...perm])
    })
  }
  return permutations;
}

console.log(getPermutations([1,2,3]))
