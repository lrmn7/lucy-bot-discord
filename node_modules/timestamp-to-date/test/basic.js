const tap = require('tap')
const timestampToDate = require('../lib/index');
const datePadding = require('../lib/date-padding');

tap.equal('01', datePadding(1), 'It pads single digit');
tap.equal('10', datePadding(10), 'It does not pad double digit');
tap.equal('2017-01-15 10:40:39', timestampToDate('1484448039504','yyyy-MM-dd HH:mm:ss'), 'It returns expected result');
