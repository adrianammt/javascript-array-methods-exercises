const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// Your code below

const numbersTimes2 = numbers.map((element) => {
  return element * 2;
});
console.log(numbersTimes2);

const numbersby2 = numbers.map((element) => {
  return element / 2;
});
console.log(numbersby2);

const numbersSquare = numbers.map((element) => {
  return element * element;
});
console.log(numbersSquare);
