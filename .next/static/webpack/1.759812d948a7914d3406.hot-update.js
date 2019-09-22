webpackHotUpdate(1,{

/***/ "./features/influencer/list/InfluencerList.tsx":
/*!*****************************************************!*\
  !*** ./features/influencer/list/InfluencerList.tsx ***!
  \*****************************************************/
/*! exports provided: InfluencerList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfluencerList", function() { return InfluencerList; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _frontend_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @frontend/ui */ "./packages/ui/src/index.ts");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _jsxFileName = "/Users/vanthihongnguyen/Documents/fpt/CAPSTONE/i2m-frontend/features/influencer/list/InfluencerList.tsx";

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  color: #1e2d52;\n  font-weight: 600;\n  margin-bottom: 10px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  min-height: calc(100vh - 200px);\n  border-right: 1px solid ", ";\n  padding: 20px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var LeftPanel = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Layout"].Flex)(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.grey25;
});
var InputLabel = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject2());
var InfluencerList = function InfluencerList() {
  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["MasterLayout"].MasterLayout, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Layout"].Flex, {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](LeftPanel, {
    flexDirection: "column",
    justifyContent: "flex-start",
    width: "260px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](InputLabel, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "Engagement"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Layout"].Flex, {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Input"].InputNumber, {
    min: 0,
    max: 10,
    step: 0.1,
    defaultValue: 0.0,
    formatter: function formatter(value) {
      return "".concat(value, "%");
    },
    parser: function parser(value) {
      return value.replace('%', '');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Input"].InputNumber, {
    min: 0,
    max: 10,
    step: 0.1,
    defaultValue: 5.0,
    formatter: function formatter(value) {
      return "".concat(value, "%");
    },
    parser: function parser(value) {
      return value.replace('%', '');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  })))));
};

/***/ })

})
//# sourceMappingURL=1.759812d948a7914d3406.hot-update.js.map