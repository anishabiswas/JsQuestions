// async function placeOrder() {
//   const randomDelay = Math.floor(Math.random() * 3000); // random delay between 0-3 seconds

//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(`✅ Order confirmed after ${randomDelay / 1000} seconds delay`);
//       //console.log() doesn’t return a value, so you’re resolving with undefined
//       //  console.log(`Order is placed after ${randomSeconds} seconds delay`)
//     }, randomDelay);
//   });
// }

// (async function () {
//   const message = await placeOrder();
//   console.log(message);
//   console.log("Continue other task after order is being placed...");
// })();

// After that delay, the promise resolves with a message string.await keyword pauses execution until the promise resolves. Resolve always return a value/data, not useful for logging.

async function placeOrder() {
  const randomDelay = Math.floor(Math.random() * 3000);
  const success = Math.random() > 0.3; // 70% chance of success

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success)
        resolve(
          `✅ Order confirmed after ${randomDelay / 1000}s`
        ); //return a string
      else reject("❌ Order failed due to network error");
    }, randomDelay);
  });
}

(async () => {
  try {
    const message = await placeOrder();
    console.log(message);
  } catch (err) {
    console.error(err);
  }
})();
