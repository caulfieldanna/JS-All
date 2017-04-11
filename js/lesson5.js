'use strict';

function Fact(n) {
	if (n == 1) {
		return 1;
	} else {
		return n*Fact(n-1);
	}
}

function Fact(n) {
	var m = n; 
	return function() {
		return "factorial" + m;
	}
}

var a = fact(3);
	a() // " " 3
	a.m = 3;
	a["..."] = 3;

