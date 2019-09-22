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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _frontend_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @frontend/ui */ "./packages/ui/src/index.ts");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "/Users/vanthihongnguyen/Documents/fpt/CAPSTONE/i2m-frontend/features/influencer/list/InfluencerList.tsx";

function _templateObject8() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  &&& {\n    width: 130px;\n    .ant-select-selection--single {\n      height: 32px;\n      .ant-select-selection__rendered {\n        line-height: 28px;\n      }\n    }\n  }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  color: ", ";\n  margin: 0 5px;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  color: ", ";\n  font-weight: 600;\n  font-size: 18px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  &&& {\n    border-radius: 20px;\n    background-color: transparent;\n    font-size: 12px;\n    width: 100px;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  &&& {\n    background-color: transparent;\n    border: none;\n    color: #1e2d52;\n    border-radius: 20px;\n    font-weight: 400;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  color: #1e2d52;\n  font-weight: 600;\n  margin-bottom: 10px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  width: calc(100% - 260px);\n  min-height: calc(100vh - 200px);\n  max-height: calc(100vh - 200px);\n  overflow: auto;\n  padding: 20px 30px 20px 0;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  min-height: calc(100vh - 200px);\n  border-right: 1px solid ", ";\n  padding: 20px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var LeftPanel = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])(_frontend_ui__WEBPACK_IMPORTED_MODULE_3__["Layout"].Flex)(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.grey25;
});
var RightPanel = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])(_frontend_ui__WEBPACK_IMPORTED_MODULE_3__["Layout"].Flex)(_templateObject2());
var InputLabel = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject3());
var ResetBtn = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])(_frontend_ui__WEBPACK_IMPORTED_MODULE_3__["Button"].Button)(_templateObject4());
var SearchBtn = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])(_frontend_ui__WEBPACK_IMPORTED_MODULE_3__["Button"].Button)(_templateObject5());
var ResultText = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject6(), function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.grey100;
});
var Result = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject7(), function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.primary;
});
var SortSelect = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])(_frontend_ui__WEBPACK_IMPORTED_MODULE_3__["Select"].Select)(_templateObject8());
var influencers = [{
  fullname: 'John Doe',
  numberOfFollowers: 1.2,
  biography: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  engagementRate: 4.83,
  likesPerPost: 59.3
}, {
  fullname: 'John Doe',
  numberOfFollowers: 1.2,
  biography: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  engagementRate: 4.83,
  likesPerPost: 59.3
}, {
  fullname: 'John Doe',
  numberOfFollowers: 1.2,
  biography: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  engagementRate: 4.83,
  likesPerPost: 59.3
}, {
  fullname: 'John Doe',
  numberOfFollowers: 1.2,
  biography: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  engagementRate: 4.83,
  likesPerPost: 59.3
}, {
  fullname: 'John Doe',
  numberOfFollowers: 1.2,
  biography: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  engagementRate: 4.83,
  likesPerPost: 59.3
}, {
  fullname: 'John Doe',
  numberOfFollowers: 1.2,
  biography: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  engagementRate: 4.83,
  likesPerPost: 59.3
}];
var InfluencerList = function InfluencerList() {
  return react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_3__["MasterLayout"].MasterLayout, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_3__["Layout"].Flex, {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2__["createElement"](LeftPanel, {
    flexDirection: "column",
    justifyContent: "flex-start",
    width: "260px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2__["createElement"](InputLabel, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, "Engagement"), react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_3__["Layout"].Flex, {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    mb: "15px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_3__["Input"].InputNumber, {
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
      lineNumber: 144
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_3__["Input"].InputNumber, {
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
      lineNumber: 152
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2__["createElement"](InputLabel, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }, "Followers"), react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_3__["Layout"].Flex, {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_3__["Input"].InputNumber, {
    min: 1000,
    placeholder: "Min",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_3__["Input"].InputNumber, {
    min: 1000,
    placeholder: "Max",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_3__["Divider"].Divider, {
    type: "horizontal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2__["createElement"](InputLabel, {
    style: {
      marginTop: '-10px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }, "Category"), react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_3__["Select"].Select, {
    mode: "multiple",
    placeholder: "Interested category",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_3__["Select"].Option, {
    value: "1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  }, "Beauty"), react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_3__["Select"].Option, {
    value: "2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }, "Travel")), react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_3__["Divider"].Divider, {
    type: "horizontal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_3__["Layout"].Flex, {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2__["createElement"](SearchBtn, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  }, "Search"), react__WEBPACK_IMPORTED_MODULE_2__["createElement"](ResetBtn, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: this
  }, "Reset Filters"))), react__WEBPACK_IMPORTED_MODULE_2__["createElement"](RightPanel, {
    flexDirection: "column",
    justifyContent: "flex-start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_3__["Layout"].Flex, {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    pl: "30px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2__["createElement"](ResultText, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: this
  }, "Showing ", react__WEBPACK_IMPORTED_MODULE_2__["createElement"](Result, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: this
  }, "1,586"), " results"), react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_3__["Layout"].Flex, {
    alignItems: "center",
    width: "200px",
    justifyContent: "space-between",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: this
  }, "Sort by", react__WEBPACK_IMPORTED_MODULE_2__["createElement"](SortSelect, {
    defaultValue: "1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_3__["Select"].Option, {
    value: "1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: this
  }, "Followers"), react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_3__["Select"].Option, {
    value: "2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: this
  }, "Engagement")))), react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_3__["Layout"].Grid, {
    gridGap: 2,
    gridTemplateColumns: "1fr 1fr 1fr",
    mt: "30px",
    justifyItems: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209
    },
    __self: this
  }, Object(lodash__WEBPACK_IMPORTED_MODULE_5__["map"])(influencers, function (influencer, key) {
    return react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_3__["Card"].InfluencerCard, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, influencer, {
      width: "300px",
      key: key,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216
      },
      __self: this
    }));
  })))));
};

/***/ })

})
//# sourceMappingURL=1.b96844b59d8c86250274.hot-update.js.map