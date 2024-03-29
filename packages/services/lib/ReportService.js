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
var ReportService = /** @class */ (function (_super) {
    __extends(ReportService, _super);
    function ReportService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'report';
        return _this;
    }
    ReportService.prototype.fetchReport = function (influencerId) {
        return this.get("/" + influencerId);
    };
    return ReportService;
}(BaseService_1.BaseService));
exports.ReportService = ReportService;
//# sourceMappingURL=ReportService.js.map