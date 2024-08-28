# Roman to Arabic Converter

This is a simple JavaScript function that converts Roman numerals to Arabic numbers. The code efficiently processes Roman numerals and provides the corresponding Arabic number.

## Features

- Converts any valid Roman numeral (I, V, X, L, C, D, M) to its Arabic equivalent.
- Handles subtraction cases (e.g., IV for 4, IX for 9).
- Easy to integrate and use in your own projects.

## Usage

### Code Example

Here is the main code for the conversion:

```javascript
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
```

### How to Use

1. **Include the Function in Your Project:**

   Copy the `romanToArabic` function into your JavaScript file.

2. **Call the Function:**

   Pass any valid Roman numeral string to the function, and it will return the corresponding Arabic number.

   ```javascript
   console.log(romanToArabic("XIV")); // Outputs: 14
   console.log(romanToArabic("MCMXCIV")); // Outputs: 1994
   ```

3. **Integration:**

   This function can be easily integrated into any web application, command-line tool, or other JavaScript projects that require conversion from Roman to Arabic numerals.

## Examples

- `"III"` → `3`
- `"IV"` → `4`
- `"IX"` → `9`
- `"LVIII"` → `58`
- `"MCMXCIV"` → `1994`

## Installation

You can clone the repository to get the code:

```bash
git clone https://github.com/MustafaProger/roman-to-arabic.git
```

Or simply copy the code from the `romanToArabic.js` file and use it directly in your project.

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.
