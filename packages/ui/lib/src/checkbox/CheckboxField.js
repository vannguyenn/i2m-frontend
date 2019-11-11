"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Checkbox_1 = require("./Checkbox");
var form_1 = require("../form");
exports.CheckboxField = function (_a) {
    var input = _a.input, _b = _a.meta, _c = _b === void 0 ? {} : _b, error = _c.error, touched = _c.touched, _d = _a.label, label = _d === void 0 ? null : _d, labelCol = _a.labelCol, wrapperCol = _a.wrapperCol, required = _a.required, _e = _a.isFieldStyle, isFieldStyle = _e === void 0 ? false : _e, rest = __rest(_a, ["input", "meta", "label", "labelCol", "wrapperCol", "required", "isFieldStyle"]);
    return (React.createElement(form_1.FormControl, { label: isFieldStyle && label, touched: touched, error: error, required: required },
        React.createElement(Checkbox_1.Checkbox, __assign({ onChange: function (e) { return input.onChange(e); }, checked: !!input.value }, rest), !isFieldStyle && label)));
};
//# sourceMappingURL=CheckboxField.js.map