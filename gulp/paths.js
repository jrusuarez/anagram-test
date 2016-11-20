'use strict';

const paths = {
    srcTested: [
        '**/*.js',
        '!test/**/*',
        '!node_modules/**/*'
    ],
    testsSrc: ['test/**/*.js']
};

module.exports = paths;
