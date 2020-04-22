function UTF8_Encoding(text) {
	return text.replace(/[^\u0000-\u00FF]/g, function(item) {
		return escape(item).replace(/(%u)(\w{4})/gi, '0x$2;')
	})
}
console.log(UTF8_Encoding('aa'))
