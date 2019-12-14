nestedArr = [1,[2,3],[4,5,6]];
// FINAL SOLUTION
module.exports.flatten = arr => arr.reduce((result, el) => result.concat((Array.isArray(el)) ? flatten(el) : el), [])

// flatten(nestedArr)

// INITIAL SOLUTION
// flatten = arr => {
//   let result = []
//   for (let i = 0; i < arr.length; i++) {
//     console.log("arr[i]: " + arr[i])
//     console.log("result: " + result)
//     if (Array.isArray(arr[i])) {
//       result = result.concat(flatten(arr[i]))
//     } else {
//       result.push(arr[i])
//     }
//   }
//   return result
// }