function update() {
	var inputStr = document.getElementById("input").value;
	var outputStr = "<table border='0'><tr>";
	for (var i=0; i<inputStr.length; i++) //row of characters
		outputStr += "<td>" + inputStr.charAt(i) + "</td>";
	outputStr += "</tr><tr class='code'>";
	for (var i=0; i<inputStr.length; i++) //row of codes (decimal)
		outputStr += "<td>" + inputStr.charCodeAt(i) + "</td>";
	outputStr += "</tr><tr class='code'>";
	for (var i=0; i<inputStr.length; i++) //row of codes (hex)
		outputStr += "<td>0x" + inputStr.charCodeAt(i).toString(16).toUpperCase() + "</td>";
	outputStr += "</tr><tr class='code'>";
	for (var i=0; i<inputStr.length; i++) //row of codes with '&#' and ';'
		outputStr += "<td>" + "&amp;#" + inputStr.charCodeAt(i) + ";</td>";
	outputStr += "</tr><tr class='code'>";
	for (var i=0; i<inputStr.length; i++) //row of codes with '&#x' and ';' in hex format
		outputStr += "<td>" + "&amp;#x" + inputStr.charCodeAt(i).toString(16).toUpperCase() + ";</td>";
	outputStr += "</tr><tr class='code'>";
	for (var i=0; i<inputStr.length; i++) //row of codes beginning with \u for javascript
		outputStr += "<td>" + "\\u" + formatUnicodeHex(inputStr.charCodeAt(i)) + "</td>";
	outputStr += "</tr><tr class='code'>";
	for (var i=0; i<inputStr.length; i++) //row of codes with 'U+' and hex value
		outputStr += "<td>U+" + formatUnicodeHex(inputStr.charCodeAt(i)) + "</td>";
	outputStr += "</tr></table>";
	document.getElementById("output").innerHTML = outputStr;
}

//takes a number variable representing a unicode char code and formats it in
//a U+0000 format with 0000 being a hex value with four (or more) digits
//if the hex value is less than four digits, it will be left padded with zeroes
function formatUnicodeHex(dval)
{
	var hval = dval.toString(16).toUpperCase();
	if (hval.length == 2)
		hval = "00" + hval;
	else if (hval.length == 3)
		hval = "0" + hval;
	return hval;
}

function showHelp()
{
	alert("Have one or more characters, but want to know their unicode values?\nPaste em' into the box and voila!");
}

Polymer('x-unicodecoder', {
	onKeyup: function() {
		update();
	},
	onFocus: function() {
		update();
	}
});