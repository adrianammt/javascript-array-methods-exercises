const grades = [5, 1, 1.3, 3.7, 1.7, 2.1, 2.4, 4.1, 6];

// Your code below

const lowerThan3 = grades.filter((grade) => {
  return grade < 3;
});
console.log(lowerThan3);

const equalOrgraterThan3 = grades.filter((grade) => {
  return grade >= 3;
});
console.log(equalOrgraterThan3);
