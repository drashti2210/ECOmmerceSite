import { sign } from 'jsonwebtoken';
import { token,} from '../configs/keys';

export const generate_tokens = (user: object): Promise<object> => {
    return new Promise((resolve, reject) => {
        try {
            let accessToken = sign(user, token.ACCESS_TOKEN, { expiresIn: token.ACCESS_EXP });
            let refreshToken = sign(user, token.REFRESH_TOKEN, { expiresIn: token.REFRESH_EXP });
            resolve({
                accessToken,
                refreshToken,
                token_type: token.TYPE,
                token_exp: Date.parse(Date()) + parseInt(token.ACCESS_EXP) * 24 * 60 * 60 * 1000
            });
        } catch (error) {
            reject(error)
        }
    })
}


export const randomCode = () => {
    // this will return random 5 digit code.
    // which will be used as user confirmation
    return Math.floor(10000 + Math.random() * 90000)
}