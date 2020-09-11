// Question 2

let L = 2; // Change the value here
let R = 3; // And here
let values = "";

if (L == R) {
  // Checking if both numbers are equal - XOR of 3^3 will give 0 that is even, but XOR of only 3 will give 3 that is odd - You have used the odd one, that is why I did the same
  values = L;
} else if (L > R) {
  for (let i = R; i <= L; i++) {
    if (!(i == L)) {
      values += `${i}^`;
    } else {
      values += `${i}`;
    }
  }
} else {
  for (let i = L; i <= R; i++) {
    if (!(i == R)) {
      values += `${i}^`;
    } else {
      values += `${i}`;
    }
  }
}

let xorValue = eval(values);

if (xorValue % 2 == 0) {
  console.log("XOR value is " + xorValue + " - Even");
} else {
  console.log("XOR value is " + xorValue + " - Odd");
}
