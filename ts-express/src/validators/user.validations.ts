import { body, query } from 'express-validator';
import { VALIDATION } from '../utils/messages';

// alawys sanitizatize the input use trim and escape every for each input.

const createUser = [
    body('first_name').trim().escape().isAlpha(),
    body('last_name').trim().escape().isAlpha().optional(),
    body('email').trim().escape().isEmail().normalizeEmail(),
    body('user_name').trim().escape().isAlphanumeric(),
    body('password').trim().isLength({ min: 8 }).withMessage(VALIDATION.PASSWORD_LENGTH),
]

const updateUser = [
    body('first_name').trim().escape().isAlpha().optional(),
    body('last_name').trim().escape().isAlpha().optional(),
    body('user_name').trim().escape().isAlphanumeric().optional(),
]

const socialLogin = [
    body('first_name').trim().escape().isAlpha().optional(),
    body('last_name').trim().escape().isAlpha().optional(),
    body('provider').trim().isIn(["GOOGLE", "FACEBOOK", "APPLE"]),
    body('social_id').trim().exists(),
]

const normalLogin = [
    body('email').trim().escape().isEmail().normalizeEmail(),
    body('password').trim().isLength({ min: 8 }).withMessage(VALIDATION.PASSWORD_LENGTH),
]

const codeVerification = [
    body('verification_code').trim().escape().isNumeric().isLength({ min: 5, max: 5 }).toInt(),
    body('two_step_auth').isBoolean().optional()
]


const forgotPassword = [
    body('email').trim().escape().isEmail().normalizeEmail(),
]


const readFollowFollowing = [
    query('type').trim().isIn(["FOLLOWER", "FOLLOWING"]).withMessage("params are FOLLOWER or FOLLOWING")
]


const resetPass = [
    body('passwordConfirmation').trim().isLength({ min: 8 }).withMessage(VALIDATION.PASSWORD_LENGTH),
    body('password').trim().isLength({ min: 8 }).withMessage(VALIDATION.PASSWORD_LENGTH).custom((val, { req, }) => {
        if (val !== req.body.passwordConfirmation) throw new Error(VALIDATION.CONFIRM_MISSMATCH);
        return true
    }),
]

const updateSettings = [
    body('tracking').isArray().optional(),
    body('notification').isBoolean().optional(),
    body('posts_commnets').isBoolean().optional(),
    body('recipes').isBoolean().optional(),
    body('followers_followings').isBoolean().optional(),
    body('direct_messages').isBoolean().optional(),
]

export default {
    normalLogin,
    resetPass,
    createUser,
    updateUser,
    socialLogin,
    updateSettings,
    forgotPassword,
    codeVerification,
    readFollowFollowing
}