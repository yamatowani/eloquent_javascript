function reverseArray(arr) {
  let result = []
  for (const value of arr) {
    result.unshift(value)
  }
  return result
}
 
console.log(reverseArray([1,2,3]))

function reverseArrayInPlace(arr) {
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    temp = arr[i]
    arr[i] = arr[arr.length - 1]
    arr[arr.length - 1] = temp
  }
  return arr
}

console.log(reverseArrayInPlace([1,2,3]))
