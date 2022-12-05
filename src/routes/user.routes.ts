import { Router } from 'express'

const routes = Router()

import userCreateController from '../controllers/users/userCreate.controller'
import userDeleteSelfController from '../controllers/users/userDeleteSelf.controller';
import userListController from '../controllers/users/userList.controller'
import userListOneController from '../controllers/users/userListOne.controller';
import userLoginController from '../controllers/users/userLogin.controller';
import userUpdatePasswordController from '../controllers/users/userUpdatePassword.controller';
import { authUser } from '../middlewares/authUser.middleware';


routes.post("/users", userCreateController);
routes.post("/users/login", userLoginController);

routes.get("/users", userListController);
routes.get("/users/me", authUser, userListOneController)

routes.delete("/users/me", authUser, userDeleteSelfController)

routes.patch("/users/me/updatepassword", authUser, userUpdatePasswordController)

export default routes