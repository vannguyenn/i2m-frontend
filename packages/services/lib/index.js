"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var GroupService_1 = require("./GroupService");
var InfluencerService_1 = require("./InfluencerService");
var ProfileService_1 = require("./ProfileService");
var RestClient_1 = require("./RestClient");
var AuthService_1 = require("./AuthService");
var ConfessionService_1 = require("./ConfessionService");
var CategoryService_1 = require("./CategoryService");
var EmailTemplateService_1 = require("./EmailTemplateService");
var ReportService_1 = require("./ReportService");
__export(require("./AuthService"));
__export(require("./RestClient"));
__export(require("./ProfileService"));
__export(require("./InfluencerService"));
__export(require("./GroupService"));
__export(require("./ConfessionService"));
__export(require("./CategoryService"));
__export(require("./EmailTemplateService"));
__export(require("./ReportService"));
exports.restClient = new RestClient_1.RestClient();
exports.authService = new AuthService_1.AuthService(exports.restClient);
exports.profileService = new ProfileService_1.ProfileService(exports.restClient);
exports.influencerService = new InfluencerService_1.InfluencerService(exports.restClient);
exports.groupService = new GroupService_1.GroupService(exports.restClient);
exports.confessionService = new ConfessionService_1.ConfessionService(exports.restClient);
exports.categoryService = new CategoryService_1.CategoryService(exports.restClient);
exports.emailTemplateService = new EmailTemplateService_1.EmailTemplateService(exports.restClient);
exports.reportService = new ReportService_1.ReportService(exports.restClient);
//# sourceMappingURL=index.js.map