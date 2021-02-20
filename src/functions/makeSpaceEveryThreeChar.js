export function makeSpaceEveryThreeChar(str) {
  const arr = str.split("").reverse();
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (i !== 0 && i % 3 === 0) {
      result.push(" ");
    }
    result.push(arr[i]);
  }
  return result.reverse().join("");
}
