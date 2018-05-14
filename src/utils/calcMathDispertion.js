export default function calcMathDispertion(randomArray, size, mathExpectation) {
  return +(randomArray.reduce((prev, cur) => {
    return Math.pow(cur - mathExpectation, 2) + prev
  }, 0) / size).toFixed(4);
}
