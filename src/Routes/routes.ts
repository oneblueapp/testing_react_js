import { Router } from 'express';
import { CadasterController } from '../Controllers/cadasterController';
import { LoginController } from '../Controllers/loginController';

const routes = Router()

routes.post('/user/cadaster', new CadasterController().cadasterController)
routes.post('/login', new LoginController().loginController)


export { routes }