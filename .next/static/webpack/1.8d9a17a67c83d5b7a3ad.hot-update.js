webpackHotUpdate(1,{

/***/ "./packages/ui/src/checkbox/Checkbox.tsx":
/*!***********************************************!*\
  !*** ./packages/ui/src/checkbox/Checkbox.tsx ***!
  \***********************************************/
/*! exports provided: Checkbox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return Checkbox; });
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "./packages/ui/node_modules/antd/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


var Checkbox = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(antd__WEBPACK_IMPORTED_MODULE_0__["Checkbox"]).withConfig({
  displayName: "Checkbox",
  componentId: "sc-1m0bk6k-0"
})([""]);

/***/ }),

/***/ "./packages/ui/src/checkbox/CheckboxField.tsx":
/*!****************************************************!*\
  !*** ./packages/ui/src/checkbox/CheckboxField.tsx ***!
  \****************************************************/
/*! exports provided: CheckboxField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxField", function() { return CheckboxField; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Checkbox */ "./packages/ui/src/checkbox/Checkbox.tsx");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../form */ "./packages/ui/src/form/index.ts");


var _jsxFileName = "/Users/vanthihongnguyen/Documents/fpt/CAPSTONE/i2m-frontend/packages/ui/src/checkbox/CheckboxField.tsx";



var CheckboxField = function CheckboxField(_ref) {
  var input = _ref.input,
      _ref$meta = _ref.meta;
  _ref$meta = _ref$meta === void 0 ? {} : _ref$meta;

  var error = _ref$meta.error,
      touched = _ref$meta.touched,
      _ref$label = _ref.label,
      label = _ref$label === void 0 ? null : _ref$label,
      labelCol = _ref.labelCol,
      wrapperCol = _ref.wrapperCol,
      required = _ref.required,
      _ref$isFieldStyle = _ref.isFieldStyle,
      isFieldStyle = _ref$isFieldStyle === void 0 ? false : _ref$isFieldStyle,
      rest = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["input", "meta", "label", "labelCol", "wrapperCol", "required", "isFieldStyle"]);

  return react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_form__WEBPACK_IMPORTED_MODULE_4__["FormControl"], {
    label: isFieldStyle && label,
    touched: touched,
    error: error,
    required: required,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_Checkbox__WEBPACK_IMPORTED_MODULE_3__["Checkbox"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    onChange: function onChange(e) {
      return input.onChange(e);
    },
    checked: !!input.value
  }, rest, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), !isFieldStyle && label));
};

/***/ }),

/***/ "./packages/ui/src/checkbox/index.ts":
/*!*******************************************!*\
  !*** ./packages/ui/src/checkbox/index.ts ***!
  \*******************************************/
/*! exports provided: Checkbox, CheckboxField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Checkbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Checkbox */ "./packages/ui/src/checkbox/Checkbox.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return _Checkbox__WEBPACK_IMPORTED_MODULE_0__["Checkbox"]; });

/* harmony import */ var _CheckboxField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CheckboxField */ "./packages/ui/src/checkbox/CheckboxField.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckboxField", function() { return _CheckboxField__WEBPACK_IMPORTED_MODULE_1__["CheckboxField"]; });




/***/ }),

/***/ "./packages/ui/src/index.ts":
/*!**********************************!*\
  !*** ./packages/ui/src/index.ts ***!
  \**********************************/
/*! exports provided: themes, styles, Button, Input, Layout, Form, Icon, Checkbox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form */ "./packages/ui/src/form/index.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return _form__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./packages/ui/src/styles/index.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return _styles__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _themes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./themes */ "./packages/ui/src/themes/index.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "themes", function() { return _themes__WEBPACK_IMPORTED_MODULE_2__; });
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./button */ "./packages/ui/src/button/index.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _button__WEBPACK_IMPORTED_MODULE_3__; });
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./input */ "./packages/ui/src/input/index.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return _input__WEBPACK_IMPORTED_MODULE_4__; });
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout */ "./packages/ui/src/layout/index.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "Layout", function() { return _layout__WEBPACK_IMPORTED_MODULE_5__; });
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./icon */ "./packages/ui/src/icon/index.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return _icon__WEBPACK_IMPORTED_MODULE_6__; });
/* harmony import */ var _checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./checkbox */ "./packages/ui/src/checkbox/index.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return _checkbox__WEBPACK_IMPORTED_MODULE_7__; });










/***/ })

})
//# sourceMappingURL=1.8d9a17a67c83d5b7a3ad.hot-update.js.map