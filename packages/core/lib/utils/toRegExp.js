"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testRegExpString = /^\/((?:\\\/|[^/])+)\/([migyu]{0,5})?$/;
var toRegExp = function (input) {
    var parts = exports.testRegExpString.exec(input);
    if (parts) {
        try {
            var regex = new RegExp(parts[1], parts[2]);
            if (regex instanceof RegExp) {
                return regex;
            }
        }
        catch (_a) { }
    }
    throw new Error("Invalid RegExp: " + input);
    return false;
};
exports.default = toRegExp;
//# sourceMappingURL=toRegExp.js.map