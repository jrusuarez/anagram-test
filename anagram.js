'use strict';
/**
* FUNCTION: isString( str )
*	Check a variale is a not null string.
*
* @private
* @param {String} str - var
* @returns {bool} comparison value
*/
function isString(str)
{
	if ((typeof str === 'string' || str instanceof String) && str!==undefined){
		return true;
	}
	else{
		return false;
	}
}


/**
* FUNCTION: ascending( a, b )
*	Comparator function for sorting characters in ascending order.
*
* @private
* @param {String} a - character
* @param {String} b - character
* @returns {Number} comparison value
*/

function ascending( a, b ) {
	if ( a < b ) {
		return -1;
	}
	if ( a === b ) {
		return 0;
	}
	return 1;
} 
/**
* FUNCTION: anagram( str1, str2 )
*	Check str2 is an anagram of str1.
*
* @private
* @param {String} str1 - String
* @param {String} str2 - String
* @returns {bool} comparison value
*/
function anagram(str1, str2) {
	if ( !isString( str1 ) ) {
		throw new TypeError( 'anagram()::invalid input argument. First argument must be a string. Value: `' + str + '`.' );
	}
	if ( !isString( str2 ) ) {
		return false;
	}
	str1 = str1.toLowerCase()
		.replace( /[^a-z0-9]/g, '' );
	str2 = str2.toLowerCase()
		.replace( /[^a-z0-9]/g, '' );
	if ( str1.length !== str2.length ) {
		return false;
	}
	str1 = str1.split( '' )
		.sort( ascending )
		.join( '' );
	str2 = str2.split( '' )
		.sort( ascending )
		.join( '' );
	return ( str1 === str2 );
}
module.exports = {
  anagram: anagram
};
