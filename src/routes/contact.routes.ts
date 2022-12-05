import { Router } from "express";

const routes = Router()

import contactCreateController from "../controllers/contacts/contactCreate.controller";
import contactDeleteController from "../controllers/contacts/contactDelete.controller";
import contactListController from "../controllers/contacts/contactList.controller";
import contactUpdateController from "../controllers/contacts/contactUpdate.controller";
import { authUser } from "../middlewares/authUser.middleware";

routes.post("/users/contact", authUser, contactCreateController)

routes.get("/users/contact", authUser, contactListController)

routes.patch("/users/contact/:id", authUser, contactUpdateController)

routes.delete("/users/contact/:id", authUser, contactDeleteController)





export default routes