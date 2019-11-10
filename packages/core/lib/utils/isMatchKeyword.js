"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
exports.isMatchKeyword = function (data, searchValue) {
    var result = false;
    var space = ' ';
    var dataWords = lodash_1.split(lodash_1.trim(data.toLowerCase()), space);
    var searchValueWords = lodash_1.split(lodash_1.trim(searchValue.toLowerCase()), space);
    searchValueWords.forEach(function (word) {
        if (lodash_1.includes(dataWords, word)) {
            result = true;
        }
    });
    return result;
};
//# sourceMappingURL=isMatchKeyword.js.map