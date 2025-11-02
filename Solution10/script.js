async function brewCoffee(coffeeType) {
  const randomDelay = Math.floor(Math.random() * 3000); //delay betweeen 0-3000ms
  const success = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve(
          `Hi, your ${coffeeType} is ready within ${
            randomDelay / 1000
          } seconds.`
        );
      } else {
        reject(`⚠ Failed to brew ${coffeeType}. Please Try Again`);
      }
    }, randomDelay);
  });
}

(async function () {
  const coffeeType = [
    "Black Coffee",
    "Cappuccino",
    "Espresso",
    "Coffee Latte",
    "Regular Coffee",
  ];
  // customer choose random coffee
  const randomCoffee =
    coffeeType[Math.floor(Math.random() * coffeeType.length)];
  try {
    const message = await brewCoffee(randomCoffee);
    console.log(message);
  } catch (error) {
    console.error(error);
  } finally {
    console.log("Next, Please!");
  }
})();
