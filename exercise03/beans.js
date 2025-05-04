function countChar(str, target) {
  let result = 0;
  for (let i =0; i < str.length; i++) {
    if (str[i] === target) {
      result += 1
    } 
  }
  return result
}

function countBs(str) {
  return countChar(str, "B")
}

console.log(countBs("BeansBBB"))
