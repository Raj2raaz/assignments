/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t) {
  return new Promise((resolve) => {
    setTimeout(() => {
      // console.log('I am wait 1')
      resolve("Wait 1 resolved after " + t + " milliseconds");
    }, t);
  });
}

function wait2(t) {
  return new Promise((resolve) => {
    setTimeout(() => {
      // console.log('I am wait 1')
      resolve("Wait 2 resolved after " + t + " milliseconds");
    }, t);
  });
}

function wait3(t) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Wait 3 resolved after " + t + " milliseconds");
    }, t);
  });
}

function calculateTime(t1, t2, t3) {
  const t1Milliseconds = t1 * 1000; // Convert seconds to milliseconds
  const t2Milliseconds = t2 * 1000;
  const t3Milliseconds = t3 * 1000;
  const start = Date.now();
  // return Promise.all([wait1(t1),wait2(t2),wait3(t3)]).then(() => {
  return Promise.all([
    wait1(t1Milliseconds),
    wait2(t2Milliseconds),
    wait3(t3Milliseconds),
  ])
    .then(() => {
      const end = Date.now();
      return end - start;
    })
    .catch((error) => {
      console.log("Error occured : " + error);
      throw error;
    });
}

module.exports = calculateTime;
