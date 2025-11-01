Q: Write an asynchronous function that takes an array of numbers and returns a new array of numbers,
where each number is multiplied by 2 after a delay of 500 milliseconds.

The doubling of each number should happen one after another, not in parallel.

----------------------------- Code starts --------------
async function doubledSequential(numbers) {
const result = [];

for (const num of numbers) {
await new Promise(resolve => setTimeout(resolve, 500)); // wait 500ms
result.push(num _ 2);
console.log(`Processed ${num} → ${num _ 2}`);
}

return result;
}

(async () => {
const result = await doubledSequential([5, 8, 6]);
console.log("Final result:", result);
})();

-------------------------------------- End ----------------------------------------------------

**Parallel** - map + Promise.all()- (Promise.all) - run all it once - result (Array of Promises, Executes all with 500 ms delay) - You return multiple independent promises, all run in parallel. You don’t await inside a loop.
All promises start simultaneously. total time = the longest one (≈500ms).
Use this when multiple async tasks are independent — none depends on another’s result.

1. API calls for multiple users/books/products - Fetch details of several users at once using multiple API endpoints
2. Parallel image uploads - Upload multiple images to Cloudinary or S3 together
3. Data transformations -Convert, compress, or process independent data chunks

If you’re calling many APIs (hundreds), it can flood the network — in such cases, you may use batching or concurrency limits.

**Sequential** - for...of + await - (await loop) - run One-by-one (in order) - Each operation should happen one after another…”- result (resolved numbers, Total time = 500 × number of elements.) Each iteration waits before starting the next.
You use this when each step depends on the previous step or must run in strict order.

1. Chained API calls - The 2nd API needs data from the 1st (e.g., get user → fetch user’s orders → fetch order details).
2. Database writes - Inserting dependent records (e.g., must insert parent before child).
3. Animation sequences - Show one animation → wait → start the next.
4. Rate Limiting - To avoid server overload or throttling
