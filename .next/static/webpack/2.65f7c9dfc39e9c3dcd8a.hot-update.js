webpackHotUpdate(2,{

/***/ "./features/influencer/detail/component/Tab.tsx":
/*!******************************************************!*\
  !*** ./features/influencer/detail/component/Tab.tsx ***!
  \******************************************************/
/*! exports provided: Tab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab", function() { return Tab; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/vanthihongnguyen/Documents/fpt/CAPSTONE/i2m-frontend/features/influencer/detail/component/Tab.tsx";




var TabContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].ul.withConfig({
  displayName: "Tab__TabContainer",
  componentId: "qt2xnk-0"
})(["display:flex;flex-direction:row;align-items:center;position:absolute;bottom:0;left:20px;margin-bottom:0;padding-inline-start:0;"]);
var TabItem = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].li.withConfig({
  displayName: "Tab__TabItem",
  componentId: "qt2xnk-1"
})(["list-style-type:none;padding:0 10px 5px 10px;border-bottom:1.5px solid ", ";a{color:", ";font-weight:600;}"], function (_ref) {
  var isActive = _ref.isActive;
  return isActive ? '#700940' : 'transparent';
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.grey100;
});
var tabs = [{
  title: 'Stats',
  name: 'stats'
}, {
  title: 'Media',
  name: 'media'
}, {
  title: 'Analytics',
  name: 'analytics'
}];
var Tab = function Tab(_ref3) {
  var tab = _ref3.tab;
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](TabContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, tabs.map(function (el, index) {
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](TabItem, {
      isActive: tab === el.name,
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: {
        pathname: next_router__WEBPACK_IMPORTED_MODULE_3___default.a.pathname,
        query: {
          tab: el.name
        }
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, el.title));
  }));
};

/***/ })

})
//# sourceMappingURL=2.65f7c9dfc39e9c3dcd8a.hot-update.js.map