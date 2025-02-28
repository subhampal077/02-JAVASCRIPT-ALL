function pushValues(inputArr, argumentArr) {
  for (let i = 0; i < argumentArr.length; i++) {
    inputArr.push(argumentArr[i]);
  }
  return inputArr;
}

Array.prototype.myConcat = function () {
  let inputArray = this;
  let argumentBunch = [...arguments];

  for (let i = 0; i < argumentBunch.length; i++) {
    if (Array.isArray(argumentBunch[i])) {
      inputArray = pushValues(inputArray, argumentBunch[i]);
    } else {
      inputArray.push(argumentBunch[i]);
    }
  }
  return inputArray;
};

const arr1 = [1, 2, 3];
const arr2 = [2, 3, 4];
const arr3 = [5, 6];
const val1 = "Subham";
const val2 = () => {};
const val3 = undefined;
const val4 = null;

// console.log(arr1.concat(val4, val3, val2, val1, arr2, arr3));
console.log(arr1.myConcat(val4, val3, val2, val1, arr2, arr3));
