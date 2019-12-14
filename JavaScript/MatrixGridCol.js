grid = [[3,0,8,4],[2,4,5,7],[9,2,6,3],[0,3,1,0]]

// Method 1
const getGridCols = grid => {
  return grid.map((_, idx) => (
    grid.map(row => row(idx))
  ))
}

// Method 2

const getGridCols2 = grid => {
  let col = new Array(grid.length).fill(0);

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      col[i] = Math.max(col[i], grid[j][i])
    }
  }
  return col;
}


const threeCharsDistinct = s => {
  let count = 0;
  for (let i = 0; i < s.length - 1; i++) {
    console.log("[s[i]: " + s[i]);
    console.log("[s[i+1]: " + s[i+1]);
    console.log("[s[i+2]: " + s[i+2]);
    console.log(new Set([s[i], s[i+1], s[i+2]]).size)
    const threeChars = [s[i], s[i+1], s[i+2]]
      if (new Set(threeChars).size === 3) count += 1
  }
  return count
}

const threeCharsDistinct = s => {
  let count = 0;
  if (s.length === 3) {
      if (new Set([s[0], s[1], s[2]]).size === 3) return 1
  }
  for (let i = 0; i < s.length - 3; i++) {
      if (new Set([s[i], s[i+1], s[i+2]]).size === 3) count += 1
  }
  return count
}


bloom, how to make hash,
deadlock,
