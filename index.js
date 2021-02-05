/** this method allows you to convert digits with two decimal places into words in english **/
const ones = [" ", "one ", "two ", "three ", "four ",
    "five ", "six ", "seven ", "eight ",
    "nine ", "ten ", "eleven ", "twelve ",
    "thirteen ", "fourteen ", "fifteen ",
    "sixteen ", "seventeen ", "eighteen ",
    "nineteen "];
const tens = [" ", " ", "twenty ", "thirty ", "forty ",
    "fifty ", "sixty ", "seventy ", "eighty",
    "ninety "];

module.exports = {

    convertDigitsToWords: (input) => {

        //Allow two decimal places
        input = Number.parseFloat(input).toFixed(2);
        let out = "";
        let splitInput = input.toString().split('.');
        let decimalVal = splitInput[1];

        //Allow only digits between 1 and 1000
        if (isNaN(input)) {
            out += "Please enter only digits";
        } else if (input > 1000) {
            out += "Please enter digits between 1 and 1000";
        } else {
            //convert integer value into words up to hunderd and thousand places
            if (input !== "" && parseInt(input)) {
                out += numtoWords(parseInt((input / 1000) % 10), "thousand ");
                out += numtoWords(parseInt((input / 100) % 10), "hundred ");
                if (input > 100 && input % 100 > 0
                    && input == parseInt(input)) {
                    out += "and ";
                }
                out += numtoWords((parseInt(input % 100)), "");
                out += "dollars ";
            }
            //convert decimal value into words if there is any
            if (parseFloat(input) && splitInput.length > 1 && decimalVal > 0) {
                if (splitInput[0] > 0) {
                    out += "and ";
                }
                out += numtoWords((parseInt(decimalVal % 100)), "") + "cents";
            }
        }

        return out.replace(/\s+/g, ' ').trim(); //trim extra whitespaces

    }
}

/** fetch tens and ones words from input **/
function numtoWords(input, str) {
    let numVal = "";
    if (input > 19)
        numVal += tens[parseInt(input / 10)] + ones[input % 10];
    else
        numVal += ones[input];

    if (numVal != 0)
        numVal += str

    return numVal;
}