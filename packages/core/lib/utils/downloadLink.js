"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
exports.downloadLink = function (url, fileName) {
    var a = document.createElement('a');
    if (!lodash_1.isEmpty(fileName)) {
        a.download = fileName;
    }
    a.href = url;
    a.target = '_blank';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
};
//# sourceMappingURL=downloadLink.js.map