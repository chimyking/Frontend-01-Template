for (let i = 0; i < 128; i++) {
	console.log('i-', String.fromCharCode(i))
}

console.log('厉害'.codePointAt(0).toString(16)) // 5389
console.log('厉害'.codePointAt(1).toString(16)) // 5bb3
