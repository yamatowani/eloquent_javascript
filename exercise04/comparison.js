
function deepEqual(a, b) {
  if (a === b) return true

  let keysA = Object.keys(a)
  let keysB = Object.keys(b)
  for (key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false
  }
  return true
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
