function range(start, end) {
  let result = []
  while (start < end + 1) {
    result.push(start)
    start += 1
  }

  return result
}

console.log(range(1, 10))

function rangeWithStep(start, end, step) {
  let result = []
  if (start < end) {
    while (start < end + 1) {
      result.push(start)
      start += step
    }
    return result
  } else {
    while (end < start + 1) {
      result.push(start)
      start += step
    }
    return result
  }
}

console.log(rangeWithStep(1, 10, 2))
console.log(rangeWithStep(5, 2, -1))
