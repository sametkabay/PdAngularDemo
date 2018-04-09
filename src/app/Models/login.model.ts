export interface Result {
    accessToken: string;
    encryptedAccessToken: string;
    expireInSeconds: number;
    shouldResetPassword: boolean;
    passwordResetCode?: any;
    userId: number;
    requiresTwoFactorVerification: boolean;
    twoFactorAuthProviders?: any;
    twoFactorRememberClientToken?: any;
    returnUrl?: any;
}

export interface login {
    result: Result;
    targetUrl?: any;
    success: boolean;
    error?: any;
    unAuthorizedRequest: boolean;
    __abp: boolean;
}
