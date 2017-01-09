'use strict';

function anagram(str1, str2) {
	let a = str1.toLowerCase().split('').sort().join();
	let b = str2.toLowerCase().split('').sort().join();
	if(a === b){
		return true;
	}
	return false;
};

module.exports = {
  anagram: anagram
};
