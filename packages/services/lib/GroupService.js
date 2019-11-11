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
var GroupService = /** @class */ (function (_super) {
    __extends(GroupService, _super);
    function GroupService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'packs';
        return _this;
    }
    GroupService.prototype.createNewList = function (data) {
        return this.post('', data);
    };
    GroupService.prototype.updateGroup = function (id, data) {
        return this.put("/" + id, data);
    };
    GroupService.prototype.deleteMyList = function (id) {
        return this.delete("/" + id);
    };
    GroupService.prototype.getMyListDetail = function (id) {
        return this.get("/" + id);
    };
    GroupService.prototype.removeAnInfluencerFromList = function (id, influencerId) {
        return this.post("/" + id, { influencerId: influencerId });
    };
    return GroupService;
}(BaseService_1.BaseService));
exports.GroupService = GroupService;
//# sourceMappingURL=GroupService.js.map