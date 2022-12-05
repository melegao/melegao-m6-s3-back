import { Request, Response } from "express";
import contactListService from "../../services/contact/contactList.service";


const contactListController = async (req: Request, res: Response) => {

    try {

        const id = req.userId

        const contacts = await contactListService(id)

        return res.send(contacts)
        
    } catch (err) {
        if (err instanceof Error){
            return res.status(400).send({
                error: err.name,
                message: err.message
            })
        }
    }
}

export default contactListController