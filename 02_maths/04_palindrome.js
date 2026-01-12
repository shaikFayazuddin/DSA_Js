
var isPalindrome = function (x) {

    let reverseNumber = 0
    let original = x
    while (x > 0) {
        let lastDigit = x % 10

        reverseNumber = (reverseNumber * 10) + lastDigit
        x = Math.floor(x / 10)
    }

    return original === reverseNumber ? true : false
};

console.log(isPalindrome(343))