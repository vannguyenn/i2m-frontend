"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
var antd_1 = require("antd");
var styled_components_1 = require("styled-components");
require("antd/lib/select/style/index.css");
require("antd/lib/empty/style/index.css");
var dropdownCss = styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  &.ant-select-dropdown {\n    padding: 6px;\n\n    .ant-select-dropdown-menu {\n      /* 9.5 item * 28px height per item */\n      /* max-height: 266px; */\n\n      > .ant-select-dropdown-menu-item {\n        &:first-child {\n          border-radius: 2px;\n        }\n\n        white-space: pre;\n        border-radius: 2px;\n        font-weight: 500;\n        color: ", ";\n        line-height: 20px;\n        padding: 4px 12px;\n      }\n\n      > .ant-select-dropdown-menu-item:hover,\n      > .ant-select-dropdown-menu-item-active,\n      > .ant-select-dropdown-menu-item-selected {\n        font-weight: 500;\n        font-size: 14px;\n        color: ", ";\n        background: ", ";\n      }\n    }\n\n    &.ant-select-dropdown--multiple .ant-select-dropdown-menu-item-selected {\n      &,\n      &:hover {\n        .ant-select-selected-icon {\n          color: ", ";\n        }\n      }\n    }\n  }\n"], ["\n  &.ant-select-dropdown {\n    padding: 6px;\n\n    .ant-select-dropdown-menu {\n      /* 9.5 item * 28px height per item */\n      /* max-height: 266px; */\n\n      > .ant-select-dropdown-menu-item {\n        &:first-child {\n          border-radius: 2px;\n        }\n\n        white-space: pre;\n        border-radius: 2px;\n        font-weight: 500;\n        color: ", ";\n        line-height: 20px;\n        padding: 4px 12px;\n      }\n\n      > .ant-select-dropdown-menu-item:hover,\n      > .ant-select-dropdown-menu-item-active,\n      > .ant-select-dropdown-menu-item-selected {\n        font-weight: 500;\n        font-size: 14px;\n        color: ", ";\n        background: ", ";\n      }\n    }\n\n    &.ant-select-dropdown--multiple .ant-select-dropdown-menu-item-selected {\n      &,\n      &:hover {\n        .ant-select-selected-icon {\n          color: ", ";\n        }\n      }\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.dark;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.dark;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.dark5;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.primary100;
});
var multipleSelectStyle = styled_components_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  .ant-select-selection--multiple .ant-select-selection__rendered {\n    margin-left: 10px;\n  }\n  .ant-select-selection.ant-select-selection--multiple\n    .ant-select-selection__choice {\n    padding-left: 25px;\n    padding-right: 10px;\n    margin: 3px 4px 1px 0;\n    border: none;\n    background: ", ";\n    .ant-select-selection__choice__remove {\n      left: 8px;\n      right: unset;\n    }\n  }\n  .ant-select-selection__placeholder {\n    margin-left: 0;\n  }\n\n  .ant-select-selection--multiple {\n    .ant-select-arrow,\n    .ant-select-selection__clear {\n      top: 18px;\n    }\n  }\n\n  &.ant-select-sm .ant-select-selection--multiple {\n    .ant-select-arrow,\n    .ant-select-selection__clear {\n      top: 16px;\n    }\n    .ant-select-selection__rendered li {\n      line-height: 18px;\n    }\n  }\n"], ["\n  .ant-select-selection--multiple .ant-select-selection__rendered {\n    margin-left: 10px;\n  }\n  .ant-select-selection.ant-select-selection--multiple\n    .ant-select-selection__choice {\n    padding-left: 25px;\n    padding-right: 10px;\n    margin: 3px 4px 1px 0;\n    border: none;\n    background: ", ";\n    .ant-select-selection__choice__remove {\n      left: 8px;\n      right: unset;\n    }\n  }\n  .ant-select-selection__placeholder {\n    margin-left: 0;\n  }\n\n  .ant-select-selection--multiple {\n    .ant-select-arrow,\n    .ant-select-selection__clear {\n      top: 18px;\n    }\n  }\n\n  &.ant-select-sm .ant-select-selection--multiple {\n    .ant-select-arrow,\n    .ant-select-selection__clear {\n      top: 16px;\n    }\n    .ant-select-selection__rendered li {\n      line-height: 18px;\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.grey5;
});
var SelectRender = function (props) { return (React.createElement(antd_1.Select, __assign({}, props, { dropdownClassName: props.className, showArrow: true }))); };
exports.Select = styled_components_1.default(SelectRender)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  &.ant-select {\n    .ant-select-selection {\n      border-radius: 3px;\n      /* border: none; */\n      .ant-select-selection-selected-value {\n        white-space: pre;\n      }\n\n      .ant-select-search--inline {\n        top: 0;\n      }\n    }\n    .ant-select-selection--single {\n      height: 40px;\n\n      .ant-select-selection__rendered {\n        line-height: 36px;\n      }\n    }\n    .ant-select-selection--multiple {\n      height: auto;\n      .ant-select-selection__rendered {\n        line-height: 36px;\n      }\n    }\n\n    .ant-select-selection,\n    &.ant-select-open .ant-select-selection {\n      box-shadow: none;\n      transition: 0s all;\n      border-width: 1.5px;\n      &:focus,\n      &:active,\n      &:hover {\n        border-width: 1.5px !important;\n        border-color: ", ";\n        box-shadow: none;\n      }\n    }\n    &.ant-select-open .ant-select-selection {\n      border-color: ", ";\n      border-width: 1.5px !important;\n    }\n    .ant-select-selection--multiple > ul > li,\n    .ant-select-selection--multiple .ant-select-selection__rendered > ul > li {\n      height: 30px;\n      line-height: 30px;\n    }\n    ", ";\n  }\n  &.ant-select-focused {\n    border-color: ", ";\n  }\n  ", ";\n"], ["\n  &.ant-select {\n    .ant-select-selection {\n      border-radius: 3px;\n      /* border: none; */\n      .ant-select-selection-selected-value {\n        white-space: pre;\n      }\n\n      .ant-select-search--inline {\n        top: 0;\n      }\n    }\n    .ant-select-selection--single {\n      height: 40px;\n\n      .ant-select-selection__rendered {\n        line-height: 36px;\n      }\n    }\n    .ant-select-selection--multiple {\n      height: auto;\n      .ant-select-selection__rendered {\n        line-height: 36px;\n      }\n    }\n\n    .ant-select-selection,\n    &.ant-select-open .ant-select-selection {\n      box-shadow: none;\n      transition: 0s all;\n      border-width: 1.5px;\n      &:focus,\n      &:active,\n      &:hover {\n        border-width: 1.5px !important;\n        border-color: ", ";\n        box-shadow: none;\n      }\n    }\n    &.ant-select-open .ant-select-selection {\n      border-color: ", ";\n      border-width: 1.5px !important;\n    }\n    .ant-select-selection--multiple > ul > li,\n    .ant-select-selection--multiple .ant-select-selection__rendered > ul > li {\n      height: 30px;\n      line-height: 30px;\n    }\n    ", ";\n  }\n  &.ant-select-focused {\n    border-color: ", ";\n  }\n  ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.primary;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.primary;
}, multipleSelectStyle, function (_a) {
    var theme = _a.theme;
    return theme.colors.primary;
}, dropdownCss);
exports.Option = styled_components_1.default(antd_1.Select.Option)(templateObject_4 || (templateObject_4 = __makeTemplateObject([""], [""])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=CoreSelect.js.map