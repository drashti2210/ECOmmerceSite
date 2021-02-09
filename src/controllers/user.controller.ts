import { Request, Response, NextFunction } from 'express'
import { Responses } from '../utils/Response'

export class UserController extends Responses {
	public login = (req: Request, res: Response, next: NextFunction) => {
		// fail request
		// return this.failed(res, {}, USER.ALREADY_REGISTERED, 200)

		// success request
		// this.success(res, { user: updatedUser, auth: tokens });
	}
}
