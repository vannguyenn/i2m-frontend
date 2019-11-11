"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBase64 = function (file) {
    return new Promise(function (resolve, reject) {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () { return resolve(reader.result); };
        reader.onerror = function (error) { return reject(error); };
    });
};
//# sourceMappingURL=getBase64.js.map