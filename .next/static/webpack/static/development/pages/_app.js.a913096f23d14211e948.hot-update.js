webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./packages/ui/src/master-layout/SecondaryLayout.tsx":
/*!***********************************************************!*\
  !*** ./packages/ui/src/master-layout/SecondaryLayout.tsx ***!
  \***********************************************************/
/*! exports provided: SecondaryLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondaryLayout", function() { return SecondaryLayout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _frontend_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @frontend/ui */ "./packages/ui/src/index.ts");
/* harmony import */ var _AuthorizedUserBtnGr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AuthorizedUserBtnGr */ "./packages/ui/src/master-layout/AuthorizedUserBtnGr.tsx");
var _jsxFileName = "/Users/vanthihongnguyen/Documents/fpt/CAPSTONE/i2m-frontend/packages/ui/src/master-layout/SecondaryLayout.tsx";




var Header = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Layout"].Flex).withConfig({
  displayName: "SecondaryLayout__Header",
  componentId: "wdaop-0"
})(["width:100%;height:50px;background-color:", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.colors.primary;
});
var SecondaryLayout = function SecondaryLayout(_ref2) {
  var children = _ref2.children;
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Layout"].Flex, {
    flexDirection: "column",
    justifyContent: "flex-start",
    style: {
      minHeight: '100%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Header, {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    p: "20px 50px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", {
    src: "/static/image/small-logo.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_AuthorizedUserBtnGr__WEBPACK_IMPORTED_MODULE_3__["AuthorizedUserBtnGr"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  })), children);
};

/***/ })

})
//# sourceMappingURL=_app.js.a913096f23d14211e948.hot-update.js.map