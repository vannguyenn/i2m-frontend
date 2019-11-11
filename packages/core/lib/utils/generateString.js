"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var generate_1 = require("nanoid/generate");
var defaultStringTemplate = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
exports.generateString = function (stringTemplate) { return generate_1.default(stringTemplate || defaultStringTemplate, 21); };
//# sourceMappingURL=generateString.js.map