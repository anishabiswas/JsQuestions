const passwordValidator = (str) => {
  const newStr = str.trim();

  if (newStr.length < 8) {
    console.log("Password must be at least 8 characters long");
    return false;
  }

  let hasUpper = false;
  let hasLower = false;
  let hasDigit = false;

  for (let char of newStr) {
    if (char >= "A" && char <= "Z") hasUpper = true;
    else if (char >= "a" && char <= "z") hasLower = true;
    else if (char >= "0" && char <= "9") hasDigit = true;
  }

  if (hasUpper && hasLower && hasDigit) {
    console.log("✅ Password is valid");
    return true;
  } else {
    console.log(
      "❌ Password must contain uppercase, lowercase, and at least one digit"
    );
    return false;
  }
};

// by using regex pattern
// const passwordValidator = (str) => {
//   const newStr = str.trim();
//   const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
//   console.log(
//     regex.test(newStr) ? "✅ Password is valid" : "❌ Invalid password"
//   );
// };

const pswd = "Rad46";
passwordValidator(pswd);
