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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "/Users/vanthihongnguyen/Documents/fpt/CAPSTONE/i2m-frontend/features/influencer/detail/component/Tab.tsx";




var TabContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].ul.withConfig({
  displayName: "Tab__TabContainer",
  componentId: "qt2xnk-0"
})(["display:flex;flex-direction:row;align-items:center;position:absolute;bottom:0;left:20px;margin-bottom:0;padding-inline-start:0;"]);
var TabItem = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].li.withConfig({
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
  key: 1,
  name: 'stats'
}, {
  title: 'Media',
  key: 2,
  name: 'media'
}, {
  title: 'Analytics',
  key: 3,
  name: 'media'
}];
var Tab = function Tab() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__["useState"](1),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      activeTab = _React$useState2[0],
      setActiveTab = _React$useState2[1];

  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](TabContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, tabs.map(function (tab) {
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](TabItem, {
      isActive: activeTab === tab.key,
      key: tab.key,
      onClick: function onClick() {
        return next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push({
          pathname: next_router__WEBPACK_IMPORTED_MODULE_4___default.a.pathname,
          query: {
            tab: tab.name
          }
        });
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, tab.title));
  }));
};

/***/ })

})
//# sourceMappingURL=2.d681a2a5b7369e8867d3.hot-update.js.map