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

function _templateObject8() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  &&& {\n    width: 130px;\n  }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  color: ", ";\n  margin: 0 5px;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  color: ", ";\n  font-weight: 600;\n  font-size: 18px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  &&& {\n    border-radius: 20px;\n    background-color: transparent;\n    font-size: 12px;\n    width: 100px;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  &&& {\n    background-color: transparent;\n    border: none;\n    color: #1e2d52;\n    border-radius: 20px;\n    font-weight: 400;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  color: #1e2d52;\n  font-weight: 600;\n  margin-bottom: 10px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: calc(100% - 260px);\n  min-height: calc(100vh - 200px);\n  max-height: calc(100vh - 200px);\n  overflow: auto;\n  padding: 20px 30px 20px 0;\n"]);

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
var RightPanel = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Layout"].Flex)(_templateObject2());
var InputLabel = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject3());
var ResetBtn = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Button"].Button)(_templateObject4());
var SearchBtn = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Button"].Button)(_templateObject5());
var ResultText = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject6(), function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.grey100;
});
var Result = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject7(), function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.primary;
});
var SortSelect = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Select"].Select)(_templateObject8());
var InfluencerList = function InfluencerList() {
  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["MasterLayout"].MasterLayout, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Layout"].Flex, {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](LeftPanel, {
    flexDirection: "column",
    justifyContent: "flex-start",
    width: "260px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](InputLabel, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, "Engagement"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Layout"].Flex, {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    mb: "15px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
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
      lineNumber: 86
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
      lineNumber: 94
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](InputLabel, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, "Followers"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Layout"].Flex, {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Input"].InputNumber, {
    min: 1000,
    placeholder: "Min",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Input"].InputNumber, {
    min: 1000,
    placeholder: "Max",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Divider"].Divider, {
    type: "horizontal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](InputLabel, {
    style: {
      marginTop: '-10px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, "Category"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Select"].Select, {
    mode: "multiple",
    placeholder: "Interested category",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Select"].Option, {
    value: "1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, "Beauty"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Select"].Option, {
    value: "2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, "Travel")), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Divider"].Divider, {
    type: "horizontal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Layout"].Flex, {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](SearchBtn, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, "Search"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](ResetBtn, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, "Reset Filters"))), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](RightPanel, {
    flexDirection: "column",
    justifyContent: "flex-start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Layout"].Flex, {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    pl: "30px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](ResultText, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, "Showing ", react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Result, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, "1,586"), " results"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Layout"].Flex, {
    alignItems: "center",
    width: "200px",
    justifyContent: "space-between",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, "Sort by", react__WEBPACK_IMPORTED_MODULE_1__["createElement"](SortSelect, {
    defaultValue: "1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Select"].Option, {
    value: "1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, "Followers"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Select"].Option, {
    value: "2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, "Engagement")))))));
};

/***/ })

})
//# sourceMappingURL=1.c741d06121db55821b9c.hot-update.js.map