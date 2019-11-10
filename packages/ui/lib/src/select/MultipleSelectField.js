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
var lodash_1 = require("lodash");
var form_1 = require("../form");
var Select_1 = require("./Select");
exports.MultipleSelectField = function (_a) {
    var input = _a.input, _b = _a.meta, touched = _b.touched, error = _b.error, label = _a.label, _c = _a.options, options = _c === void 0 ? [] : _c, required = _a.required, selectProps = _a.selectProps, layoutProps = _a.layoutProps, rest = __rest(_a, ["input", "meta", "label", "options", "required", "selectProps", "layoutProps"]);
    var value = lodash_1.isArray(input.value) ? input.value : [];
    var onBlurSelect = function (event) { return input.onBlur(event); };
    return (React.createElement(form_1.FormControl, { label: label, touched: touched, error: error, required: required, layoutProps: layoutProps },
        React.createElement(Select_1.Select, __assign({ mode: "multiple", onBlur: onBlurSelect, value: value, onChange: input.onChange, options: options }, rest, selectProps))));
};
//# sourceMappingURL=MultipleSelectField.js.map