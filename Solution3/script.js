const revStr = (str) => {
  let newStr = str.split("").reverse().join("");
  return newStr;
};
const string = "RadheyShyam";
const result = revStr(string);
console.log(string.concat(result));

// or else , use for-of loop then in push the elements into the newStr. But it has low efficiency.
