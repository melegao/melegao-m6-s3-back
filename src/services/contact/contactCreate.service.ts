import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { User } from "../../entities/user.entity";
import { IContact } from "../../interfaces/users";



const contactCreateService = async ({name, email, phone, userId}: IContact) => {


    const contactRepository = AppDataSource.getRepository(Contact)
    const userRepository = AppDataSource.getRepository(User)

    const contacts = await contactRepository.find()
    const users = await userRepository.findOneBy({id: userId})

    const emailAlreadyExists = contacts.find(contact => contact.email === email)

    if (emailAlreadyExists){
        throw new Error ("Email Already Exists")
    }

    if(!users){
        throw new Error("Users does not exists.")
    }

    const newContact = new Contact()
    newContact.name = name
    newContact.email = email
    newContact.phone = phone
    newContact.user = users

    contactRepository.create(newContact)
    await contactRepository.save(newContact)

    return newContact
}


export default contactCreateService