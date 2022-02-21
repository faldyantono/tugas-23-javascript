function isGreater(element, index, array) {
  return (element >= 15);
}

let numbers = [32, 33, 16, 40, 9, 7, 11, 2, 44, 1, 66].filter(isGreater);
console.log(numbers);