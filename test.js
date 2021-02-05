const { test, only } = require('tap')
const convertDigitsToWords = require('convertdigitstowords')

test('Should convert numbers to words correctly', (t) => {
    const assertNum = (num, words) => {
        t.equal(convertDigitsToWords.convertDigitsToWords(num), words)
    }

    assertNum(0.12, 'twelve cents')
    assertNum(10.55, 'ten dollars and fifty five cents')
    assertNum(120.62, 'one hundred twenty dollars and sixty two cents')
    assertNum(6, 'six dollars')
    assertNum(27, 'twenty seven dollars')
    assertNum(678, 'six hundred and seventy eight dollars')
    assertNum(9, 'nine dollars')
    assertNum(90.42, 'ninety dollars and forty two cents')
    assertNum(901, 'nine hundred and one dollars')
    assertNum(1000, 'one thousand dollars')

    t.end()
})
