export default function calcMathExpectation(randomArray, size) {
  return +(randomArray.reduce((prev, cur) => {
    return prev + cur
  }, 0) / size).toFixed(4)
}
