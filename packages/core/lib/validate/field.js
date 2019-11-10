"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
var constants_1 = require("@frontend/constants");
var yup = require("yup");
exports.required = function (value) {
    return value && !lodash_1.isEmpty(lodash_1.trim(value)) ? undefined : 'This field is required.';
};
exports.maxLength = function (length) {
    if (length === void 0) { length = 80; }
    return function (value) {
        return lodash_1.isEmpty(value) || value.length <= length
            ? undefined
            : "Only contain maximum " + length + " characters.";
    };
};
exports.minLength = function (length) {
    if (length === void 0) { length = 4; }
    return function (value) {
        return !lodash_1.isEmpty(value) && value.length >= length
            ? undefined
            : "Contain at least " + length + " characters.";
    };
};
exports.matchPassword = function (value, allValues) {
    return value !== allValues.password && 'Should match with Password.';
};
exports.email = function (value) {
    var schema = yup.string().email(constants_1.VALIDATION_MESSAGE.EMAIL);
    try {
        value && schema.validateSync(value);
        return undefined;
    }
    catch (error) {
        return error.message;
    }
};
//# sourceMappingURL=field.js.map