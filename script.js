const numbers = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
}

let romanNum = 'X',
    arabicNum = 0;

let romanNumArr = romanNum.split('');

romanNumArr.forEach((item, index, arr) => {
    for (let key in numbers) {
        if (item === key) {
            arr[arr.indexOf(item)] = numbers[key];
        }
    }
})

for (let i = 0; i < romanNumArr.length; i++) {
    if (romanNumArr[i] < romanNumArr[i + 1]) {
        arabicNum -= romanNumArr[i]
    } else {
        arabicNum += romanNumArr[i]
    }
}

console.log(arabicNum)
