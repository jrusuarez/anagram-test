'use strict';

function anagram(str1, str2) {
	var arr1 = [];
	var arr2 = [];
	for(var i = 0 ; i< str1.length; i ++ ){
		arr1.push(str1[i])
	}
	for(var i = 0 ; i< str2.length; i ++ ){
		arr2.push(str2[i])
	}
	if( arrEq(arr1.sort() , arr2.sort()) ){
		return true;
	} else {
		return false;
	}
}

function arrEq(arr1, arr2) {
  for (var i = 0; i < arr1.length; i++)
    if (arr1[i] != arr2[i])
      return false;
  return i == arr2.length;
}

module.exports = {
  anagram: anagram
};
