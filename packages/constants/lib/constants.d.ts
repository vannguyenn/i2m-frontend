export declare const PATHS: {
    login: string;
    signup: string;
    myInfluencer: string;
    myProfile: string;
    influencers: string;
    detail: string;
    influencerDetail: string;
    influencerRanking: string;
};
export declare const KEYS: {
    ACCESS_TOKEN: string;
    REDIRECT_URL: string;
};
export declare const SERVICES: {
    BaseService: symbol;
};
export declare const VALIDATION_MESSAGE: {
    REQUIRED: string;
    EMAIL: string;
    MAX_LENGTH: (maxLength: number) => string;
};
export declare const ERROR_CODE: {
    existed_username: string;
    existed_email: string;
};
export declare const OAUTH2_REDIRECT_URI = "http://localhost:3000";
export declare const API_BASE_URL = "http://localhost:8080";
export declare const GOOGLE_AUTH_URL: string;
export declare const MESSAGES: {
    SAVE_SUCESS: string;
    existing_influencer: string;
    SEND_MAIL_SUCCESS: string;
    SEND_MAIL_ERROR: string;
};
export declare enum MODE {
    CREATE = "create",
    EDIT = "edit"
}
export declare enum POST_STATUS {
    MOST_COMMENT = "MOST_COMMENT",
    LATEST = "LATEST",
    MOST_LIKE = "MOST_LIKE"
}
export interface IEmailTemplateProps {
    id: string;
    content: string;
    name: string;
}
