"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var moment = require("moment");
var lodash_1 = require("lodash");
exports.isBeforeDays = function (date, numOfDay) {
    if (lodash_1.isEmpty(date)) {
        return false;
    }
    var endDate = moment(date, 'YYYY-MM-DD');
    var currentDate = moment().startOf('day');
    var duration = moment.duration(endDate - currentDate).asDays();
    return duration <= numOfDay && duration > 0;
};
//# sourceMappingURL=date.js.map