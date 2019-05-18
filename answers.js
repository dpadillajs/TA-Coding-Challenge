// ## Problem 1
// Write a function, that when invoked, alerts "Durham is awesome!"

function alertTheTruth() {
  //   alert("Durham is Awesome!");
  console.log("PROBLEM 1:");
  console.log("Durham is Awesome!\n");
}

alertTheTruth();

// ## Problem 2
// Write some JavaScript that loops through the following `bands` array and alerts, "I love [bandName]", obviously with the current band name string replacing the [bandName].
const bands = ["Kiss", "Aerosmith", "ACDC", "Led Zeppelin", "Nickelback"];

function cycleBands(bands) {
  console.log("PROBLEM 2:");
  for (let i = 0; i < bands.length; i++) {
    console.log("I love " + bands[i] + ".");
  }
  console.log("");
}

cycleBands(bands);

// ## Problem 3
// In the above challenge, when the loop gets to `'Nickelback'`, alert, "I DON'T love Nickelback!", but still alert the previous message for all other bands.

function cycleBandsAlt(bands) {
  console.log("PROBLEM 3:");
  for (let i = 0; i < bands.length; i++) {
    if (bands[i] === "Nickelback") {
      console.log("I DON'T love Nickelback!");
    } else {
      console.log("I love " + bands[i] + ".");
    }
  }
  console.log("");
}

cycleBandsAlt(bands);

// ## Problem 4
// Write some JavaScript that finds the average of the following array:
const numArray = [34, 203, 16, 46, 34, 432, 342, 124, 33, 188, 12];

function avgOfArray(arr) {
  let totalSum = 0;
  arr.forEach(function(element) {
    totalSum += element;
  });
  console.log("PROBLEM 4:");
  console.log(totalSum / arr.length);
  console.log("");
}

avgOfArray(numArray);

// ## Problem 5
// Write some JavaScript to find the MOST frequent item, and the LEAST frequent item in the following array. The return should look like: `The most frequent item is: b. The least frequent item is : d`
const letterArr = ["a", "b", "c", "d", "c", "b", "b", "c", "a", "e", "b", "e"];

function frequencyCheck(arr) {
  let mostFreq = 0;
  let mostFreqLetter = "";
  let leastFreq = 0;
  let leastFreqLetter = "";

  for (let i = 0; i < arr.length; i++) {
    let testForHighest = 0;
    let testForLowest = 0;

    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        testForHighest++;
        if (mostFreq < testForHighest) {
          mostFreq = testForHighest;
          mostFreqLetter = arr[i];
        }
      } else {
        testForLowest++;
        if (leastFreq < testForLowest) {
          leastFreq = testForLowest;
          leastFreqLetter = arr[i];
        }
      }
    }
  }
  console.log("PROBLEM 5:");
  console.log("The most frequent item is: " + mostFreqLetter);
  console.log("The least frequent item is: " + leastFreqLetter);
  console.log("");
}

frequencyCheck(letterArr);

// ## Problem 6
// Imagine that you have two arrays, each with single letter strings in the arrays. For example:
const firstArr = ["a", "b", "c", "a", "a", "b", "d"];
const secondArr = ["a", "b", "b", "a", "e", "c", "c", "g"];
let newArr = [];

// Write some JavaScript to create a new array based on the overlapping items and the number of times the overlap occurs. For example, our new array would look like this:
// ['a', 'a', 'c', 'b', 'b'];
// To explain further, the string `'a'` appears 3 times in the frist array and 2 times in the second array. Therefore, there are only 2 overlaps. The string `'c'` appears 1 time in the first array and 2 times in the scrond array. Therefore, there is only 1 overlap. The same pattern follows with `'b'`. Our new array is based on those overlaps.

function createNewArr(firstArr, secondArr) {
  for (let i = 0; i < firstArr.length; i++) {
    for (let j = 0; j < secondArr.length; j++) {
      if (firstArr[i] === secondArr[j]) {
        newArr.push(secondArr[j]);
        firstArr.shift();
      }
    }
  }
  console.log("PROBLEM 6:");
  console.log(newArr.sort());
  console.log("");
}

createNewArr(firstArr, secondArr);

// ## Problem 7
// Imagine that you're wanting to withdraw cash from the bank to cover specific costs. You want to withdraw the exact dollar amount, using the largest bills possible. For example, if the cost you were trying to cover is $1,745, you would need to withdraw 17 $100 bills, 2 $20 bills and 1 $5 bill. We'll leave change (anything less than a dollar) out of it for the sake of the exercise.

// To solve this, write a function that takes one argument, `cost` and returns an object with the bill breakdown. For example, the object returned for \$1,744, would like look this:
// {
//   100: 17,
//   20: 2,
//   1: 4
// }

// If you want to take it a step further, enable your function to take a second argument, `bills`, which is an array of the bills you want your budget broken down in to. For example:
// budgetToBills(1754, [20, 10, 5, 1]); // { 20: 87, 10: 1, 1: 4 }
// budgetToBills(1754, [100, 20, 50, 10, 5, 1]; // { 100: 17, 50: 1, 4: 1 }

// What if you someone passes in the wrong arguments?
const desiredBills = {};

function budgetToBills(cost, bills) {
  // Input Validation
  if (typeof cost !== "number") {
    console.log('The "cost" parameter is not a number. Please try again.');
  } else if (!Array.isArray(bills)) {
    console.log('The "bills" parameter is not an array. Please try again.');
  } else {
    // Functionality Below
    for (let i = 0; i < bills.length; i++) {
      desiredBills[bills[i]] = parseInt(cost / bills[i]);
      cost = cost - desiredBills[bills[i]] * bills[i];
    }
    console.log("PROBLEM 7:");
    console.log(desiredBills);
  }
}

budgetToBills(2743, [100, 20, 5, 1]);

// Run 'node answer.js' in the terminal for challenge solutions
