/**
 * @param {number} number
 * @param {number} x
 * @return {string}
 */
function convertNumberToString(number, x = 10) {
	let integer = Math.floor(number)
	let decimal = number - integer
	let string = !integer ? '0' : ''
	while (integer > 0) {
		string = `${integer % x}${string}`
		integer = Math.floor(integer / x)
	}

	if (decimal) {
		string += '.'
		while (decimal && !/\.\d{20}$/.test(string)) {
			// 最大保留20位小数
			decimal *= x
			string += `${Math.floor(decimal)}`
			decimal -= Math.floor(decimal)
		}
	}
	return string
}

console.log(convertNumberToString(0, 10)) // "0"
console.log(convertNumberToString(3.14156, 10)) // "123.45600000000000306954"
console.log(convertNumberToString(12.55, 8)) // "14.4314631463146315"
console.log(convertNumberToString(12.5, 16)) // "12.8"
