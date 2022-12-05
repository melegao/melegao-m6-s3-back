import { Request, Response } from "express";
import contactCreateService from "../../services/contact/contactCreate.service";


const contactCreateController = async (req: Request, res: Response) => {

    try{

        const {name, email, phone} = req.body

        const userId = req.userId

        const newContact = await contactCreateService({name, email, phone, userId})

        return res.status(201).send(newContact)

    }catch(err){
        if (err instanceof Error) {
            return res.status(400).send({
                error: err.name,
                message: err.message
            })
        }
    }
}

export default contactCreateController