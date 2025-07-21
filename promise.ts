//The promise pattern is extremely powerful in the sense that it helps to execute asynchronous operations in a sequential manner.

const myPromise: Promise<string> = new Promise((resolve, reject) => {
  const x: number = 5;

  setTimeout(() => {
    if (x > 0) {
      // Typically you'd call resolve here on success
      resolve("Success");
    } else {
      // Failure case
      reject("Failure");
    }
  }, 2000);
});

myPromise
  .then((res: string) => console.log(res))
  .catch((err: string) => console.error(err));
