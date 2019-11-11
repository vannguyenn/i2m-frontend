"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var BaseService_1 = require("./BaseService");
var EmailTemplateService = /** @class */ (function (_super) {
    __extends(EmailTemplateService, _super);
    function EmailTemplateService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'email-template';
        return _this;
    }
    EmailTemplateService.prototype.getEmailTemplate = function () {
        return this.get('');
    };
    return EmailTemplateService;
}(BaseService_1.BaseService));
exports.EmailTemplateService = EmailTemplateService;
//# sourceMappingURL=EmailTemplateService.js.map