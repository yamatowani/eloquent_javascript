function arrayToList(array) {
  let list = null
  for (let i = array.length - 1; i >= 0; i--) {
     list = {
      value: array[i],
      rest: list     
    }
  }
  return list
}

console.log(arrayToList([1,2,3]))
