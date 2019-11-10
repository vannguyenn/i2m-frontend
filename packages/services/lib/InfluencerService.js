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
var InfluencerService = /** @class */ (function (_super) {
    __extends(InfluencerService, _super);
    function InfluencerService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'influencers';
        return _this;
    }
    InfluencerService.prototype.fetchInfluencers = function (page, size, sortBy, search, minFollowers, maxFollowers, minEngagement, maxEngagement, categories) {
        return this.get('', {
            params: {
                page: page,
                sortBy: sortBy,
                size: size,
                search: search,
                minFollowers: minFollowers,
                maxFollowers: maxFollowers,
                minEngagement: minEngagement,
                maxEngagement: maxEngagement,
                categories: categories,
            },
        });
    };
    InfluencerService.prototype.fetchInfluencerDetail = function (id) {
        return this.get("/" + id);
    };
    InfluencerService.prototype.saveInfluencerToList = function (packId, influencerId) {
        return this.put("/" + influencerId, { packId: packId });
    };
    InfluencerService.prototype.getMaxFollowerCount = function () {
        return this.get('/max-followers');
    };
    InfluencerService.prototype.suggestInfluencer = function () {
        return this.get('/suggestion');
    };
    InfluencerService.prototype.getTopInfluencer = function () {
        return this.get('/ranking');
    };
    InfluencerService.prototype.loadMoreInfluencer = function (limit) {
        return this.get("/load-more?limit=" + limit);
    };
    return InfluencerService;
}(BaseService_1.BaseService));
exports.InfluencerService = InfluencerService;
//# sourceMappingURL=InfluencerService.js.map