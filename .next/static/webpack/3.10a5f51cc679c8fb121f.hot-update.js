webpackHotUpdate(3,{

/***/ "./features/my-account/MyAccountController.tsx":
/*!*****************************************************!*\
  !*** ./features/my-account/MyAccountController.tsx ***!
  \*****************************************************/
/*! exports provided: MyAccountController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAccountController", function() { return MyAccountController; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _frontend_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @frontend/ui */ "./packages/ui/src/index.ts");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_final_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-final-form */ "./node_modules/react-final-form/dist/react-final-form.es.js");
var _jsxFileName = "/Users/vanthihongnguyen/Documents/fpt/CAPSTONE/i2m-frontend/features/my-account/MyAccountController.tsx";




var Content = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_frontend_ui__WEBPACK_IMPORTED_MODULE_1__["Layout"].Flex).withConfig({
  displayName: "MyAccountController__Content",
  componentId: "sc-17g0yzq-0"
})(["min-height:calc(100vh - 180px);max-height:calc(100vh - 180px);overflow:auto;background:#f3f4f6;padding:20px 40px;"]);
var FormContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "MyAccountController__FormContainer",
  componentId: "sc-17g0yzq-1"
})(["width:100%;background:#fff;padding:20px;"]);
var Title = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "MyAccountController__Title",
  componentId: "sc-17g0yzq-2"
})(["color:", ";font-weight:600;font-size:18px;"], function (_ref) {
  var theme = _ref.theme;
  return theme.colors.grey100;
});
var FORM_FIELDS = {
  email: {
    name: 'email',
    placeholder: 'Your E-Mail',
    label: 'E-Mail'
  },
  password: {
    name: 'password',
    placeholder: 'Your Password',
    label: 'Password'
  },
  fullname: {
    name: 'fullname',
    label: 'Fullname',
    placeholder: 'What should we call you ...'
  },
  category: {
    name: 'category',
    label: 'Category',
    placeholder: 'Please choose your interested category'
  }
};

var MyAccountForm = function MyAccountForm(_ref2) {
  var handleSubmit = _ref2.handleSubmit;
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_1__["Form"].Form, {
    onSubmit: handleSubmit,
    layout: "vertical",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_final_form__WEBPACK_IMPORTED_MODULE_3__["Field"], {
    name: FORM_FIELDS.email.name,
    label: FORM_FIELDS.email.label,
    placeholder: FORM_FIELDS.email.placeholder,
    component: _frontend_ui__WEBPACK_IMPORTED_MODULE_1__["Input"].InputField,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_final_form__WEBPACK_IMPORTED_MODULE_3__["Field"], {
    name: FORM_FIELDS.fullname.name,
    label: FORM_FIELDS.fullname.label,
    placeholder: FORM_FIELDS.fullname.placeholder,
    component: _frontend_ui__WEBPACK_IMPORTED_MODULE_1__["Input"].InputField,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_final_form__WEBPACK_IMPORTED_MODULE_3__["Field"], {
    name: FORM_FIELDS.password.name,
    label: FORM_FIELDS.password.label,
    placeholder: FORM_FIELDS.password.placeholder,
    component: _frontend_ui__WEBPACK_IMPORTED_MODULE_1__["Input"].InputPasswordField,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_final_form__WEBPACK_IMPORTED_MODULE_3__["Field"], {
    name: FORM_FIELDS.category.name,
    label: FORM_FIELDS.category.label,
    placeholder: FORM_FIELDS.category.placeholder,
    component: _frontend_ui__WEBPACK_IMPORTED_MODULE_1__["Select"].MultipleSelectField,
    options: [{
      value: '1',
      label: 'Van xinh dep'
    }, {
      value: '2',
      label: 'Beauty'
    }],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_1__["Layout"].Flex, {
    flexDirection: "row",
    justifyContent: "space-between",
    mt: "10px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_1__["Button"].Button, {
    type: "primary",
    width: "180px",
    style: {
      height: '43px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, "Update")));
};

var MyAccountController = function MyAccountController() {
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_1__["MasterLayout"].MasterLayout, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Content, {
    flexDirection: "column",
    justifyContent: "flex-start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, "Account Setting"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](FormContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_final_form__WEBPACK_IMPORTED_MODULE_3__["Form"], {
    onSubmit: function onSubmit(v) {
      return console.log(v);
    },
    render: MyAccountForm,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }))));
};

/***/ })

})
//# sourceMappingURL=3.10a5f51cc679c8fb121f.hot-update.js.map