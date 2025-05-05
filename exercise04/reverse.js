function reverseArray(arr) {
  let result = []
  for (const value of arr) {
    result.unshift(value)
  }
  return result
}
 
console.log(reverseArray([1,2,3]))

