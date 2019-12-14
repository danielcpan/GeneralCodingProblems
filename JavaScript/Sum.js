const sum = (x, y) => (y !== undefined) ? x + y : (y) => x + y

console.log(sum(2,3));   // Outputs 5
console.log(sum(2)(3));  // Outputs 5

const car = () => {
  let speed = 0;
  return () => {
    console.log(speed)
  }
}

const createBase = base => num => base + num

const duplicate = arr => [...arr, ...arr]