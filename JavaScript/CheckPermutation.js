const checkPermutation = (str1, str2) => {
  let shorter;
  let longer;
  if (str1.length < str2.length) {
    shorter = str1;
    longer = str2;
  } else {
    shorter = str2;
    longer = str1;
  }

  const longerHash = {}
  for (let i = 0; i < longer.length; i++) {
    const letter = longer[i];
    if (longerHash[letter]) {
      longerHash[letter] += 1
    } else {
      longerHash[letter] = 1
    }
  }

  for (let i = 0; i < shorter.length; i++) {
    const letter = shorter[i];
    if (longerHash[letter] && longerHash[letter] !== 0) {
      longerHash[letter] -= 1;
    } else {
      return false
    }

  }

  return true;
}

console.log(checkPermutation('hello', 'elloworld'))