// (function ()){

'use strict';

var str = prompt('введите слово', '');

var vowel = ['а', 'я', 'о', 'ё', 'у', 'ю', 'и', 'э', 'ы', 'е'];
var count = 0; 
for (var i = 0; i < str.length; i++) {
	for (var j = 0; j < vowel.length; j++) {
		if(str[i]=== vowel[j]) {
			count++;
		};
	};
};

console.log(count);
// }());


