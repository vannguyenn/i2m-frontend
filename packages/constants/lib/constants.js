"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PATHS = {
    login: '/login',
    signup: '/register',
    myInfluencer: '/my-influencers',
    myProfile: '/my-account',
    influencers: '/influencers',
    detail: '/influencers/detail?tab=stats',
    influencerDetail: '/influencers/detail',
    influencerRanking: '/influencers/ranking',
};
exports.KEYS = {
    ACCESS_TOKEN: 'x-access-token',
    REDIRECT_URL: 'redirectUrl',
};
exports.SERVICES = {
    BaseService: Symbol('BaseService'),
};
exports.VALIDATION_MESSAGE = {
    REQUIRED: 'This field is required.',
    EMAIL: 'Please enter a valid email address.',
    MAX_LENGTH: function (maxLength) {
        return "Only contain maximum " + maxLength + " characters.";
    },
};
exports.ERROR_CODE = {
    existed_username: 'existed-username',
    existed_email: 'existed-email',
};
exports.OAUTH2_REDIRECT_URI = 'http://localhost:3000';
exports.API_BASE_URL = 'http://localhost:8080';
exports.GOOGLE_AUTH_URL = exports.API_BASE_URL + '/oauth2/authorize/google?redirect_uri=' + exports.OAUTH2_REDIRECT_URI;
exports.MESSAGES = {
    SAVE_SUCESS: 'Save successfully.',
    existing_influencer: 'Influencer is already saved to this list',
    SEND_MAIL_SUCCESS: 'Send email successfully.',
    SEND_MAIL_ERROR: 'Sorry! email delivery failure',
};
var MODE;
(function (MODE) {
    MODE["CREATE"] = "create";
    MODE["EDIT"] = "edit";
})(MODE = exports.MODE || (exports.MODE = {}));
var POST_STATUS;
(function (POST_STATUS) {
    POST_STATUS["MOST_COMMENT"] = "MOST_COMMENT";
    POST_STATUS["LATEST"] = "LATEST";
    POST_STATUS["MOST_LIKE"] = "MOST_LIKE";
})(POST_STATUS = exports.POST_STATUS || (exports.POST_STATUS = {}));
//# sourceMappingURL=constants.js.map