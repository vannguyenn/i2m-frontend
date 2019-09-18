webpackHotUpdate(1,{

/***/ "./features/login/LoginController.tsx":
/*!********************************************!*\
  !*** ./features/login/LoginController.tsx ***!
  \********************************************/
/*! exports provided: LoginController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginController", function() { return LoginController; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _frontend_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @frontend/ui */ "./packages/ui/src/index.ts");
/* harmony import */ var react_final_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-final-form */ "./node_modules/react-final-form/dist/react-final-form.es.js");
var _jsxFileName = "/Users/vanthihongnguyen/Documents/fpt/CAPSTONE/i2m-frontend/features/login/LoginController.tsx";




var CONSTANTS = {
  intro: 'START YOUR INFLUENCER MARKETING CAMPAIGN',
  loginTitle: 'Login your account',
  register: 'Register',
  login: 'Login'
};
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
  rememberMe: {
    name: 'rememberMe',
    label: 'Remember me'
  }
};
var LoginBox = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Layout"].Flex).withConfig({
  displayName: "LoginController__LoginBox",
  componentId: "sc-1ayx8d-0"
})(["padding:30px 40px;border-radius:2px;box-shadow:0 1px 3px rgba(0,0,0,0.12),0 1px 2px rgba(0,0,0,0.24);width:500px;display:flex;justify-content:flex-start;flex-direction:column;"]);
var IntroText = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "LoginController__IntroText",
  componentId: "sc-1ayx8d-1"
})(["text-transform:uppercase;color:", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.colors.grey100;
});
var LoginTitle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "LoginController__LoginTitle",
  componentId: "sc-1ayx8d-2"
})(["color:#000;font-weight:600;font-size:30px;margin-top:20px;margin-bottom:15px;"]);

var LoginForm = function LoginForm(_ref2) {
  var handleSubmit = _ref2.handleSubmit;
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Form"].Form, {
    onSubmit: handleSubmit,
    layout: "vertical",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_final_form__WEBPACK_IMPORTED_MODULE_3__["Field"], {
    name: FORM_FIELDS.email.name,
    label: FORM_FIELDS.email.label,
    placeholder: FORM_FIELDS.email.placeholder,
    component: _frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Input"].InputField,
    prefix: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Icon"].Icon, {
      type: "mail",
      color: "dark30",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_final_form__WEBPACK_IMPORTED_MODULE_3__["Field"], {
    name: FORM_FIELDS.password.name,
    label: FORM_FIELDS.password.label,
    placeholder: FORM_FIELDS.password.placeholder,
    component: _frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Input"].InputPasswordField,
    prefix: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Icon"].Icon, {
      type: "key",
      rotate: 225,
      color: "dark30",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Layout"].Flex, {
    flexDirection: "row",
    justifyContent: "space-between",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Button"].Button, {
    width: "180px",
    height: "40px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, CONSTANTS.register), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Button"].Button, {
    type: "primary",
    width: "180px",
    height: "40px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, CONSTANTS.login)));
};

var LoginController = function LoginController() {
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Layout"].Flex, {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    style: {
      height: '100%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](LoginBox, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](IntroText, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, CONSTANTS.intro), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](LoginTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, CONSTANTS.loginTitle), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_final_form__WEBPACK_IMPORTED_MODULE_3__["Form"], {
    onSubmit: function onSubmit(v) {
      return console.log(v);
    },
    render: LoginForm,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  })));
};

/***/ })

})
//# sourceMappingURL=1.204efc3e711f4f792186.hot-update.js.map