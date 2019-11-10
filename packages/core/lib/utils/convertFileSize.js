"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertFileSize = function (value) {
    var valueInKb = value / 1024;
    if (valueInKb / 1024 >= 1) {
        return (valueInKb / 1024).toFixed(2) + " MB";
    }
    return valueInKb.toFixed(2) + " KB";
};
//# sourceMappingURL=convertFileSize.js.map