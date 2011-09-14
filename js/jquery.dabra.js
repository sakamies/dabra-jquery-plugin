/*
 * jQuery Abbracadabra (please give me a better name)
 * dabra.jquery.js
 *
 * Make abbreviations meaningful with a simple dictionary.
 * Designed by Ville V. Vanninen / http://foolproof.me
 * Written by Pasi Jokinen / http://workflower.fi
 * @version 1.618
 *
 * Usage:
 * var dictionary = {'term':'definition', 'dom':'Document Object Model'};
 * $('abbr').dabra(dictionary);
 */

//[TODO] a parameter to set the attribute the function is using, this would then enable you to set any variable based on the text of elements
//[TODO] case sensitivity, yes, no, parameter?
//[TODO] Regexp matching option for the text?
//[TODO] abbra.jquery.js for creating dictionaries based on collected elements on the page

/*[TODO] options should maybe in the long run go something like the following, if there are many possibble arguments:
	.dabra({
		'attribute': 'class',
		'dictionary': dict,
	});

	while we stay simple, something like .dabra(dict, optional_attribute_name); should do fine

*/

(function($)
{
    $.fn.dabra = "$.fn.dabra";

    $.fn.dabra = function(user_dict)
    { 
		var default_dict = {
			"css": "Cascading Style Sheets",
			"dom": "Document Object Model",
			"api": "Application Programming Interface",
		};
		var dictionary;
		
		if ( user_dict ){
			dictionary = user_dict;
		} else {
			dictionary = default_dict;
		}
		
		var stack = new Array;
		
		this.each(function()
		{
			var abbr = $(this).text().toLowerCase();
			var definition = dictionary[abbr];
			if (definition != undefined){
				$(this).attr('title', definition);
				stack.push(this);
			}
		});

		return $(stack);
    };
})(jQuery);
