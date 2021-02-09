export const ENVIROMENT = {
    DEVELOPMENT: "development",
    STAGING: "staging",
    PRODUCTION: "production"
}

export const DATE_TYPE = {
    WEEK: "WEEK",
    MONTH: "MONTH",
    DAY: "DAY"
}

export const VALIDATION = {
    VALIDATION_ERROR: 'Validation Error Occured',
    PASSWORD_LENGTH: 'Minimum password length required is 8',
    CONFIRM_MISSMATCH: 'Password confirmation is incorrect',
    USER_NOT_EXISTS: 'User does not exists',
    SELF_FOLLOW_ERROR: 'You cannot follow yourself',
    SELF_BLOCK_ERROR: 'You cannot block yourself',
    INVALID_DATE_TIME: "Invalid date time",
    STARTDT_ENDDT_ERROR: "Start date cant be after end date",
}

export const ERRORS = {
    MISSING_HEADER: 'Authrization Header Missing',
    UNAUTH_ACCESS: 'Unauthorized Access',
}

export const USER = {
    ALREADY_REGISTERED: 'User is already registered',
    NOT_FOUND: 'User does not exists',
    FOUND: 'User found',
    DELETED: 'User deleted',
    ALREADY_VERIFIED: 'User is verified already',
    WRONG_CODE: 'Wrong verification code',
    RESENT_CODE: 'Code has been send to your email',
    WRONG_PASS: 'Wrong password',
    VERIFIED: 'User is verified successfully',
    LOGIN_SUCCESS: 'User logged in successfully',
    PASSWORD_RESET_SUCCESS: 'Your password has been reset successfully',
    ALREDY_SOCIAL_LOGIN: 'You are already logged in via social account',
    REGISTERED_NOT_VERIFIED: 'You are registered but verification is pending',
    PENDING_VERIFICATON: 'Your code verification is pending',
    FOLLOWED: "Followed successfully",
    UNFOLLOWED: "Unfollowed successfully",
    BLOCKED: "Blocked successfully",
    UNBLOCKED: "Unblocked successfully",
    FOLLOWING_FOLLOWER: ["user_id", "follower_id", "following_id"],
    EXCLUDE_SETTING: ["updatedAt", "createdAt", "id", "user_id"],
    USER_SETTING: "User settings",
    SETTINGS_UPDATED: "User settings updated",
    TOKEN_GENERATED: "New token generated",
    WIGWAG_APPROVED: "APPROVED",
}

export const PROFILE = {
    EXCLUDE: ["createdAt", "updatedAt", "user_id", "id"],
    NOT_FOUND: 'User profile not found',
    FOUND: 'User profile found',
    ADDED: 'Details added to user profile',
    DELETED: 'Profile deleted',
    WIGWAG_FOUND: 'Wig-Wag card found',
    WIGWAG_NOT_FOUND: 'Wig-Wag card not found',
    RESTRICTION_ADDED: 'Added to Wig-Wag card',
    WIG_WAG_DELETED: "wig-wag deleted successfully",
    WIGWAG_UPDATE: 'wig-wag card updated for restriction',
    USING_FOR: ["SELF", "DEPENDENTS", "PETS", "SPOUSE_OR_PARTNER"],
    GENDER: ["MALE", "FEMALE", "OTHER"],
    WIGWAG_SELF_SHARE: "You cannot share wigwag card with yourself",
    WIGWAG_BLOCK_SHARE: "You cannot share wig-wag card with user you blocked",
    WIGWAG_TYPE: ["APPROVED", "REJECTED"],
    WIG_WAG_NOT_EXISTS: "wig-wag request does not exists",
    WIG_WAG_UNAUTH_SHARE: "This wig-wag card is not shared to you",
    SHARE_WIGWAG: "wig-wag card shared successfully",
    UN_SHARE_WIGWAG: "wig-wag card shared successfully",
    SHARE_WIGWAG_TO_ME: "All wig-wag cards shared to you by others",
    ERROR_ON_APPROVAL: "Error occured while accepting wig-wag card",
    NOT_EXISTS: "Data to be deleted not exists",
    ACCEPTED_WIG_WAG: "All wig-wag accepted by you",
    WIGWAG_REJECTED: "REJECTED",
    WIGWAG_SHARED: "SHARED",
    USER_RECIPES: "User recipies"
}
