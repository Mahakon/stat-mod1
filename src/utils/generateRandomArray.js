export default function generateRandomArray(size) {
  let arr = [], av = 0;

  for (let i = 0; i < size; i++) {
    arr.push(+Math.random().toFixed(4))
  }

  return arr;
}
