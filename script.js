const numbers = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
}

let romanNum = 'M',
    arabicNum = 0;

let romanNumArr = romanNum.split('')

console.log(romanNumArr)

romanNumArr.forEach((item, index, arr) => {
    for (let key in numbers) {
        if (item == key) {
            arabicNum += numbers[key]
        }
    }
})

console.log(arabicNum)
