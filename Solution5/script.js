function addition(arr) {
  let sum = 0;
  for (a of arr) {
    if (a < 0) break;
    sum = sum + a;
  }
  return sum;
}
console.log(addition([4, 3, 2, 4, -2, 4, 5, 6]));

// forEach() cannot be “stopped” early using break or return. here we can't use forEach method of array because break/continue/return won't applicable to this loop , so itcan't break outer func early. forEach() is not a traditional loop — it’s a higher-order function that calls your callback for each element.
// There’s no way to break or return early from it.

// 🔹 If I need control, conditions, or async, → use for...of.
// 🔹 If I’m just doing something for each element → use forEach().

// reduce method ----

// const sumUntilNegative = (arr) => {
//   let stop = false;
//   return arr.reduce((acc, num) => {
//     if (num < 0 || stop) {
//       stop = true;
//       return acc;
//     }
//     return acc + num;
//   }, 0);
// };

//ForEach method -----

// const sumUntilNegative = (arr) => {
//   let sum = 0;
//   let stop = false; // flag to stop adding after negative number

//   arr.forEach((num) => {
//     if (!stop) {
//       if (num < 0) {
//         stop = true; // turn flag on when negative found
//       } else {
//         sum += num;
//       }
//     }
//   });
//  return sum;
// };
