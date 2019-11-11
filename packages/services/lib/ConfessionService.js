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
var ConfessionService = /** @class */ (function (_super) {
    __extends(ConfessionService, _super);
    function ConfessionService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "confession";
        return _this;
    }
    ConfessionService.prototype.sendEmail = function (data) {
        return this.post('', data);
    };
    ConfessionService.prototype.historySendMail = function (influencer) {
        return this.get("/history/" + influencer);
    };
    ConfessionService.prototype.downloadFile = function (fileName) {
        return this.get("/download/" + fileName);
    };
    return ConfessionService;
}(BaseService_1.BaseService));
exports.ConfessionService = ConfessionService;
//# sourceMappingURL=ConfessionService.js.map