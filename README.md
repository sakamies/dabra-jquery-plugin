An Abbreviation Dictionary with jQuery
===

Abbracadabra, aka dabra.jquery.js, is a simple jquery plugin to fill in titles to abbreviations on a page according to a dictionary. Of course you should include proper title attributes in abbr elements when writing the content, but if you’re lazy or you can’t, this might come in handy.


Usage
---

var dict = {
	"css": "Cascading Style Sheets",
	"dom": "Document Object Model",
	"api": "Application Programming Interface",
};
$('abbr').dabra(dict);


Todo
---

- A parameter to set the attribute the function is using, this would then enable you to set any variable based on the text of elements
- Case sensitivity, yes, no, parameter?
- Regexp matching option for the text?
- abbra.jquery.js for creating dictionaries based on collected elements on the page
- options should maybe in the long run go something like the following, if there are many possibble `arguments:
	.dabra({
		'attribute': 'class',
		'dictionary': dict,
	});

	while we stay simple, something like .dabra(dict, optional_attribute_name); should do fine
`

