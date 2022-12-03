import { Request, Response } from "express";
import userCreateService from "../../services/users/userCreate.service";


const userCreateController = (req: Request, res: Response) => {

    try{

        const {name, email, phone} = req.body

        const newUser = userCreateService({name, email, phone})

        return res.status(201).send(newUser)

    }catch(err){
        if (err instanceof Error) {
            return res.status(400).send({
                error: err.name,
                message: err.message
            })
        }
    }
}

export default userCreateController