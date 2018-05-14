import generateRandomArray from "./generateRandomArray";
import calcMathExpectation from "./calcMathExpectation";

export default function calckf(size) {
  let k = [], f = [];
  const randomArray = generateRandomArray(size);
  const mathExpectation = calcMathExpectation(randomArray, size);

  for (let i = 0; i < size; i++) {
    f.push(i + 1);

    k.push(
      randomArray.reduce((prev, cur, index, arr) => {
        if (index < size - i) {
          return prev +
            ((cur - mathExpectation) * (arr[index + i] - mathExpectation))
        } else {
          return prev;
        }
      }, 0) /
      randomArray.reduce((prev, cur) => {
        return Math.pow((cur - mathExpectation), 2) + prev
      }, 0)
    )
  }

  return {
    k: k,
    f: f
  }
}
