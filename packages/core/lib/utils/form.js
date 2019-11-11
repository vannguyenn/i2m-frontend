"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
exports.useFormVisited = function (visited) {
    var formVisited = false;
    Object.keys(visited).forEach(function (field) {
        if (visited[field]) {
            formVisited = true;
        }
    });
    return formVisited;
};
exports.checkTouchedForm = function (touchedFields) {
    console.log(touchedFields);
    var fieldValue = Object.values(touchedFields);
    return lodash_1.findIndex(fieldValue, function (val) { return val; }) >= 0;
};
//# sourceMappingURL=form.js.map