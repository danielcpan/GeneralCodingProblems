const printMatrix = matrix => {
  for (let i = 0; i < matrix.length; i++) {
    const row = []
    for (let j = 0; j < matrix[0].length; j++) {
      row.push(matrix[i][j] ? matrix[i][j] : 'empty')
    }
    console.log(row)
  }
}

const createMatrix = (row, col) => {
  const matrix = []
  for (let i = 0; i < row; i++) {
    matrix.push(new Array(col))
  }
  return matrix;
}

const createSpiral = (row, col) => {
  const spiral = createMatrix(row, col);
  let currentNum = 1;
  let i = 0;
  let j = 0;
  let di = 0;
  let dj = 1;

  while (currentNum <= row * col) {
    spiral[i][j] = currentNum++;

    if (i + di === row || j + dj === col || j + dj === -1 || spiral[i + di][j + dj]) {
      const tempDi = di;
      di = dj;
      dj = -tempDi

    }
    i += di;
    j += dj;
  }
  return spiral;
}

console.log(createSpiral(5,6))

const rotateOverDiagonals = (m, k) => {
  for (let z = 0; z < k; z++) {
      for (let i = 0; i < m.length; i++) {
          for (let j = i+1; j < m[0].length-1-i; j++) {

              // For Reference
              // m[i][j] Top
              // m[j][m[0].length-1-i] Right
              // m[m[0].length-1-i][m[0].length-1-j] Bottom
              // m[m[0].length-1-j][i] Left

              const temp = m[i][j];
              m[i][j] = m[m[0].length-1-j][i]
              m[m[0].length-1-j][i] = m[m[0].length-1-i][m[0].length-1-j]
              m[m[0].length-1-i][m[0].length-1-j] = m[j][m[0].length-1-i]
              m[j][m[0].length-1-i] = temp
          }
      }
  }
  return m
}
