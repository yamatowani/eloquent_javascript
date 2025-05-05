function range(start, end) {
  let result = []
  while (start < end + 1) {
    result.push(start)
    start += 1
  }

  return result
}

console.log(range(1,10))
