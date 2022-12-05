import { Request, Response } from "express";
import contactDeleteService from "../../services/contact/contactDelete.service";


const contactDeleteController = async (req: Request, res: Response) => {

    try {

        const contactId = req.params.id

        const contact = await contactDeleteService(contactId)

        return res.status(200).json({message: "Contact deleted with success!"})
        
    } catch (err) {
        if (err instanceof Error) {
            return res.status(401).send({
                error: err.name,
                message: err.message
            })
        }
        
    }
}

export default contactDeleteController