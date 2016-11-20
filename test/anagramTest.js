/* globals describe, it */
'use strict';
const should = require('should');
const anagram = require('../anagram.js').anagram;

describe('anagram', () => {

  [
    {str1: 'Rasp', str2: 'Spar'},
    {str1: 'aaa', str2: 'AAA'},
    {str1: 'aab', str2: 'baa'},
    {str1: 'looped', str2: 'poodle'}
  ].forEach((testInput) => {
    it('should return true for the strings ' + testInput.str1 + ' and ' + testInput.str2, (done) => {
      should(anagram(testInput.str1, testInput.str2)).eql(true);
      done();
    });
  });

  [
    {str1: 'Rasp', str2: 'Spa'},
    {str1: 'aba', str2: 'bab'},
    {str1: 'aab', str2: 'abb'},
    {str1: 'aab', str2: 'aaa'},
    {str1: 'looped', str2: 'podlee'}
  ].forEach((testInput) => {
    it('should return false for the strings ' + testInput.str1 + ' and ' + testInput.str2, (done) => {
      should(anagram(testInput.str1, testInput.str2)).eql(false);
      done();
    });
  });
});
