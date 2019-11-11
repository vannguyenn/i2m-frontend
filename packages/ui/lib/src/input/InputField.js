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
var Input_1 = require("./Input");
var form_1 = require("../form");
exports.InputFieldContext = React.createContext(undefined);
exports.InputField = function (_a) {
    var input = _a.input, _b = _a.meta, _c = _b === void 0 ? {} : _b, error = _c.error, touched = _c.touched, submitError = _c.submitError, dirty = _c.dirty, _d = _a.label, label = _d === void 0 ? '' : _d, required = _a.required, layoutProps = _a.layoutProps, rest = __rest(_a, ["input", "meta", "label", "required", "layoutProps"]);
    var contextValue = React.useContext(exports.InputFieldContext);
    React.useEffect(function () {
        if (dirty && !required && !input.value) {
            input.onChange(null);
        }
    }, [input.value]);
    return (React.createElement(form_1.FormControl, { label: label, touched: touched, error: error || submitError, required: required, layoutProps: layoutProps },
        React.createElement(Input_1.Input, __assign({ maxLength: 80 }, input, rest, contextValue))));
};
//# sourceMappingURL=InputField.js.map