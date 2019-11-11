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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var CoreSelect_1 = require("./CoreSelect");
var lodash_1 = require("lodash");
var DEFAULT_FILTER = function (input, option) {
    var children = lodash_1.get(option, ['props', 'children']);
    return children && children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
};
exports.Select = function (props) { return (React.createElement(CoreSelect_1.Select, __assign({ showSearch: true, filterOption: DEFAULT_FILTER }, props), lodash_1.map(props.options, function (_a, index) {
    var value = _a.value, label = _a.label, renderLabel = _a.renderLabel;
    return (React.createElement(CoreSelect_1.Option, { key: index, value: value }, renderLabel || label));
}))); };
//# sourceMappingURL=Select.js.map