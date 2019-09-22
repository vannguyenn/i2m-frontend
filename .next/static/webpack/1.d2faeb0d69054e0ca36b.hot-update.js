webpackHotUpdate(1,{

/***/ "./packages/ui/src/master-layout/MasterLayout.tsx":
/*!********************************************************!*\
  !*** ./packages/ui/src/master-layout/MasterLayout.tsx ***!
  \********************************************************/
/*! exports provided: MasterLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterLayout", function() { return MasterLayout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layout */ "./packages/ui/src/layout/index.ts");
/* harmony import */ var _GuestButtonGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GuestButtonGroup */ "./packages/ui/src/master-layout/GuestButtonGroup.tsx");
var _jsxFileName = "/Users/vanthihongnguyen/Documents/fpt/CAPSTONE/i2m-frontend/packages/ui/src/master-layout/MasterLayout.tsx";




var Header = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_layout__WEBPACK_IMPORTED_MODULE_2__["Flex"]).withConfig({
  displayName: "MasterLayout__Header",
  componentId: "ud8avk-0"
})(["height:250px;background-color:", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.colors.primary100;
});
var MasterLayout = function MasterLayout(_ref2) {
  var _ref2$rightAction = _ref2.rightAction,
      rightAction = _ref2$rightAction === void 0 ? _GuestButtonGroup__WEBPACK_IMPORTED_MODULE_3__["GuestButtonGroup"] : _ref2$rightAction;
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_layout__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
    flexDirection: "column",
    justifyContent: "flex-start",
    style: {
      minHeight: '100%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Header, {
    flexDirection: "column",
    justifyContent: "flex-start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_layout__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    p: "20px 50px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", {
    src: "/static/image/small-logo.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_GuestButtonGroup__WEBPACK_IMPORTED_MODULE_3__["GuestButtonGroup"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }))));
};

/***/ })

})
//# sourceMappingURL=1.d2faeb0d69054e0ca36b.hot-update.js.map