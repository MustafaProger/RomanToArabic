export function convert() {
    const arabicInteger = document.querySelector('.arabic-integer'),
        romanInteger = document.querySelector('.roman-integer');
    const numbers = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }

    const arabicIntMinFont = Object.keys(numbers).map(item => {
        return item.toLowerCase();
    });

    const allowedKeys = [...(Object.keys(numbers)), ...arabicIntMinFont, 'Backspace', 'Delete', 'ArrowLeft', 'ArrowRight'];


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

    arabicInteger.addEventListener('keydown', function (event) {
        if (!allowedKeys.includes(event.key) && !event.ctrlKey && !event.metaKey) {
            event.preventDefault();
        }
    });

    arabicInteger.addEventListener('input', () => {
        if (!(arabicInteger.value == '')) {
            arabicInteger.value = arabicInteger.value.toUpperCase();
            romanInteger.innerHTML = romanToArabic(arabicInteger.value);

            localStorage.setItem('valueInt', arabicInteger.value.toUpperCase());

        } else {
            romanInteger.innerHTML = 0;
            localStorage.removeItem('valueInt', arabicInteger.value.toUpperCase());
        }
    })

    if (localStorage.getItem('valueInt')) {
        arabicInteger.value = localStorage.getItem('valueInt');
        arabicInteger.value = arabicInteger.value.toUpperCase();
        romanInteger.innerHTML = romanToArabic(arabicInteger.value);
    }
}