import { users } from "../../database";
import { IUser, IUserCreate } from "../../interfaces/users";
import {v4 as uuidv4} from 'uuid'


const userCreateService = ({name, email, phone}: IUserCreate) => {
    
    const emailAlreadyExists = users.find(user => user.email === email)

    if (emailAlreadyExists){
        throw new Error ("Email Already Exists")
    }

    const newUser: IUser = {
        id: uuidv4(),
        name,
        email,
        phone
    }

    users.push(newUser)

    return newUser

}

export default userCreateService