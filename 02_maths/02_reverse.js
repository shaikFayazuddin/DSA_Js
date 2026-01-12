function reverse(N) {
  let reverseNumber = 0;
  let isNegative = false;

  if (N < 0) {
    isNegative = true;
    N *= -1;
  }

  while (N > 0) {
    let lastDigit = N % 10;
    reverseNumber = reverseNumber * 10 + lastDigit;
    N = Math.floor(N / 10);
  }

  return isNegative ? -reverseNumber : reverseNumber;
}

console.log(reverse(1534236469));

////

function reverseVariation(N) {
  let reverseNumber = 0;

  while (N !== 0) {
    let lastDigit = N % 10;
    reverseNumber = reverseNumber * 10 + lastDigit;
    N = Math.trunc(N / 10);
    //code doesn't work with math.floor as math.floor rounds off to the negative infinity and in case of negative number the number rounds off the next least value..ex Math.floor(-4569/10) Math.floor(-456.9) is -457 and again Math.floor(-457/10) Math.floor(-45.7) is -46 and then again Math.floor(-46/10) Math.floor(-4.6) is -5 and now Math.floor(5/10) Math.floor(-0.5) is -1 and now the infinity loop starts like Math.floor(-1/10) Math.floor(-0.1) is -1 and the loop continues
  }

  return reverseNumber;
}
N = -4569;

// bug with using Math.floor
/* // Iteration 1:
lastDigit = -4569 % 10 = -9
reverseNumber = 0 * 10 + (-9) = -9
N = Math.floor(-4569 / 10) = Math.floor(-456.9) = -457  ❌

// Iteration 2:
lastDigit = -457 % 10 = -7
reverseNumber = -9 * 10 + (-7) = -97
N = Math.floor(-457 / 10) = Math.floor(-45.7) = -46  ❌

// Iteration 3:
lastDigit = -46 % 10 = -6
reverseNumber = -97 * 10 + (-6) = -976
N = Math.floor(-46 / 10) = Math.floor(-4.6) = -5  ❌

// Iteration 4:
lastDigit = -5 % 10 = -5
reverseNumber = -976 * 10 + (-5) = -9765
N = Math.floor(-5 / 10) = Math.floor(-0.5) = -1  ❌ (STUCK!)

// Iteration 5:
lastDigit = -1 % 10 = -1
reverseNumber = -9765 * 10 + (-1) = -97651
N = Math.floor(-1 / 10) = Math.floor(-0.1) = -1  ❌ (STILL -1!)

// Iteration 6:
lastDigit = -1 % 10 = -1
reverseNumber = -97651 * 10 + (-1) = -976511
N = Math.floor(-1 / 10) = Math.floor(-0.1) = -1  ❌ (INFINITE LOOP!)

// Iteration 7:
lastDigit = -1 % 10 = -1
reverseNumber = -976511 * 10 + (-1) = -9765111
N = Math.floor(-1 / 10) = -1  ❌ (NEVER REACHES 0!)

// ... continues forever adding -1 to reverseNumber infinitely */

console.log(reverseVariation(-1534236469));

function reverseOptimal(N) {
  // here the number is less than 32 bit
  let reverseNumber = 0;
  let MAX_INT = Math.pow(2, 31) - 1;
  let MIN_INT = -Math.pow(2, 31);

  while (N !== 0) {
    let lastDigit = N % 10;
    N = Math.trunc(N / 10); //removing the decimal

    if (
      reverseNumber > Math.trunc(MAX_INT / 10) ||
      (reverseNumber === Math.trunc(MAX_INT / 10) && digit > 7)
    ) {
      return 0;
    }

    if (
      reverseNumber < Math.trunc(MIN_INT / 10) ||
      (reverseNumber === Math.trunc(MIN_INT / 10) && digit < -8)
    ) {
      return 0;
    }

    reverseNumber = reverseNumber * 10 + lastDigit;
  }

  return reverseNumber;
}

console.log(reverseOptimal(-43619045772269));
console.log(reverseOptimal(-469));
