import { Application } from 'express';
import { UserController } from '../controllers/user.controller';
import { Middleware } from '../middlewares';
import { userValidation } from '../validators'

export class UserRoutes extends Middleware {
    public userController: UserController = new UserController();
    constructor() { super() }

    public routes = (app: Application) => {
        app.route('/user/login')
            .post(userValidation.normalLogin, this.valid, this.userController.login);
    }
}