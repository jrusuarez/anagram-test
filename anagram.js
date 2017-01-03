'use strict';

var isAnagram= require('validate.io-anagram');

function anagram(str1, str2) {
 var result= isAnagram( str1, str2 );
 return result;
}

module.exports = {
  anagram: anagram
};
