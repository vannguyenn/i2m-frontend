"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
var trimData = function (values) {
    if (lodash_1.isString(values)) {
        return lodash_1.trim(values);
    }
    if (lodash_1.isArray(values)) {
        return lodash_1.map(values, trimData);
    }
    if (lodash_1.isObject(values)) {
        return lodash_1.mapValues(values, trimData);
    }
    return values;
};
exports.default = trimData;
//# sourceMappingURL=trimData.js.map