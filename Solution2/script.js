const doubledArray = (arr) => {
  let newArr = [...new Set(arr)];
  return newArr.map((a) => a * 2);
};
const arr = [4, 6, 2, 6, 2, 8, 9, 10, 16, 17, 2, 4];
const result = doubledArray(arr);
console.log(result);
