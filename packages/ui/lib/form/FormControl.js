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
var Form_1 = require("./Form");
var lodash_1 = require("lodash");
var core_1 = require("@frontend/core");
var getFormItemProps = function (touched, error, required) {
    return {
        required: required,
        help: touched && lodash_1.toString(error),
        validateStatus: touched && error ? 'error' : undefined,
    };
};
exports.FormControl = function (_a) {
    var label = _a.label, touched = _a.touched, error = _a.error, required = _a.required, children = _a.children, layoutProps = _a.layoutProps, rest = __rest(_a, ["label", "touched", "error", "required", "children", "layoutProps"]);
    var formItemProps = layoutProps
        ? layoutProps
        : React.useContext(core_1.context.FormItem);
    var errors = getFormItemProps(touched, error, required);
    return (React.createElement(Form_1.FormItem, __assign({ label: label, colon: false }, formItemProps, errors, rest), children));
};
//# sourceMappingURL=FormControl.js.map