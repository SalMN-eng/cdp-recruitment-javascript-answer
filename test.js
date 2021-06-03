const assert = require('assert');
const countData = require('./countMethod').countData;
const filterData = require('./filterMethod').filterData;
const mock = require('./mock').mock;


describe('countData', function () {
    it('should return counted data for people and animals', function () {
        let result = countData(mock);
        assert.strictEqual(result[0].name, 'Dillauti [5]');
        assert.strictEqual(result[0].people[0].name, 'Winifred Graham [6]')
    });
});

describe('filterData', function () {
    it('should return filtered data ', function () {
        let result = filterData(mock, 'ry');
        assert.strictEqual(result.length, 2);
    }); 
});