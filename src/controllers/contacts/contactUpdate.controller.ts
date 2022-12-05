import { Request, Response } from "express";
import contatcUpdateService from "../../services/contact/contactUpdate.service";


const contactUpdateController = async (req: Request, res: Response) => {

    try {

        const contactId = req.params.id
        const id = req.userId
        const {name, email, phone} = req.body

        const updatedContact = await contatcUpdateService({
            id,
            name,
            email,
            phone,
            contactId
        })

        return res.status(200).send({updatedContact, message: "Contact updated with sucess!"})

    } catch (err) {
        if (err instanceof Error){
            return res.status(401).send({
                error: err.name,
                message: err.message
            })
        }
    }
}

export default contactUpdateController