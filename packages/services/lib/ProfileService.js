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
var ProfileService = /** @class */ (function (_super) {
    __extends(ProfileService, _super);
    function ProfileService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'users';
        return _this;
    }
    ProfileService.prototype.getCurrentUser = function () {
        return this.get('/self');
    };
    ProfileService.prototype.getMyInfluencerLists = function () {
        return this.get('/self/packs');
    };
    ProfileService.prototype.updateCurrentUser = function (userid, data) {
        return this.put("/" + userid + "/update", data);
    };
    ProfileService.prototype.updatePassword = function (userid, data) {
        return this.put("/" + userid + "/update-password", data);
    };
    ProfileService.prototype.uploadAvatar = function (file) {
        return this.put('/avatar', file);
    };
    return ProfileService;
}(BaseService_1.BaseService));
exports.ProfileService = ProfileService;
//# sourceMappingURL=ProfileService.js.map