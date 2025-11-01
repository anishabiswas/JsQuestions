const countVowels = (str) => {
  const vowels = "aeiouAEIOU";
  let count = 0;

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  //   str.split('').forEach(ch =>{
  //   if(vowels.includes(ch))  count++;
  //   }

  return count;
};

// Example usage
console.log(countVowels("Anisha"));
