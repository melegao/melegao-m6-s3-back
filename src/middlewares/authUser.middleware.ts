
import { Request, Response, NextFunction } from "express";

import jwt from 'jsonwebtoken'

export const authUser = (req: Request, res: Response, next: NextFunction) => {

    try {
        
        const token = req.headers.authorization

        jwt.verify(token as string, "1234" as string, (err: any, decoded: any) => {
            req.userEmail = decoded.email
            req.userId = decoded.id
            next()
        })

    } catch (error) {
        return res.status(401).json({message: "Invalid Token"})
    }
}