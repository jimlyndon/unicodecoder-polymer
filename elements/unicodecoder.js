function getCharacters() {
	var value = document.getElementById('input').value;
	this.characters = value ? value.split('') : [];
}

function unicodePad(value) {
	// new variable needed to keep coercion to base16 during concatenation
	var b16 = base16(value);
	switch (b16.length)
	{
		case 2:
			return '00' + b16;
		case 3:
			return '0' + b16;
		default:
			return b16;
	}
}

function base16(value) {
	return value.toString(16).toUpperCase();
}

Polymer('x-unicodecoder', {
	characters: [],
	code: function(value) {
		return value.charCodeAt(0);
	},
	hex: function(value) {
		return '0x' + base16(value);
	},
	htmlEntity: function(value) {
		var prepend = '&#';

		if(value[0]=='0' && value[1]=='x')
			return prepend + value.slice(1);

		return prepend + value;
	},
	codeValue: function(value) {
		return 'U+' + unicodePad(value);

	},
	escSeq: function(value) {
		return '\\u' + unicodePad(value);

	},
	onKeyup: function() {
		getCharacters.call(this);
	},
	onFocus: function() {
		getCharacters.call(this);
	}
});