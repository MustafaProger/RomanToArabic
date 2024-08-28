const numbers = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
};

function romanToArabic(romanNum) {
    return romanNum.split('').reduce((acc, curr, i, arr) => {
        const currentVal = numbers[curr];
        const nextVal = numbers[arr[i + 1]];
        
        if (currentVal < nextVal) {
            return acc - currentVal;
        } else {
            return acc + currentVal;
        }
    }, 0);
}
