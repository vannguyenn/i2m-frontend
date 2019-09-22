webpackHotUpdate(2,{

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
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../input */ "./packages/ui/src/input/index.ts");
var _jsxFileName = "/Users/vanthihongnguyen/Documents/fpt/CAPSTONE/i2m-frontend/packages/ui/src/master-layout/MasterLayout.tsx";





var Header = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_layout__WEBPACK_IMPORTED_MODULE_2__["Flex"]).withConfig({
  displayName: "MasterLayout__Header",
  componentId: "ud8avk-0"
})(["height:250px;background-color:", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.colors.primary100;
});
var SearchInputContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "MasterLayout__SearchInputContainer",
  componentId: "ud8avk-1"
})(["width:50%;height:40px;background:#fff;border-radius:5px;margin-right:20px;"]);
var SearchInput = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_input__WEBPACK_IMPORTED_MODULE_4__["Input"]).withConfig({
  displayName: "MasterLayout__SearchInput",
  componentId: "ud8avk-2"
})(["&&&{height:100%;border:none;padding-left:20px;&:hover,&:focus{border-color:", ";}}"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.primary;
});
var MasterLayout = function MasterLayout(_ref3) {
  var _ref3$rightAction = _ref3.rightAction,
      RightAction = _ref3$rightAction === void 0 ? _GuestButtonGroup__WEBPACK_IMPORTED_MODULE_3__["GuestButtonGroup"] : _ref3$rightAction;
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_layout__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
    flexDirection: "column",
    justifyContent: "flex-start",
    style: {
      minHeight: '100%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Header, {
    flexDirection: "column",
    justifyContent: "flex-start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_layout__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    p: "20px 50px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", {
    src: "/static/image/small-logo.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](RightAction, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_layout__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](SearchInputContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](SearchInput, {
    placeholder: "Search for influencers",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  })))));
};

/***/ })

})
//# sourceMappingURL=2.0482c36fc7ea7ae95742.hot-update.js.map