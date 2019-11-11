"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
var selectTagNormalizer = function (values) {
    var newValue = lodash_1.map(values, function (value) { return lodash_1.trim(value); });
    lodash_1.remove(newValue, function (value) { return !value; });
    newValue = lodash_1.uniq(newValue);
    return newValue ? newValue : null;
};
exports.default = selectTagNormalizer;
//# sourceMappingURL=selectTagNormalizer.js.map