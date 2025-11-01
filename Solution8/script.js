function doubled(num) {
  return num.map((n) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(n * 2);
      }, 500);
    });
  });
}

const number = [5, 8, 6, 8, 3, 9];
console.log(doubled(number));

//to resolve all the promises

(async () => {
  const result = await Promise.all(doubled([5, 8, 6, 8, 3, 9]));
  console.log(result); // [10, 16, 12, 16, 6, 18]
})();
