import { AppDataSource } from "../../data-source"
import { Contact } from "../../entities/contact.entity"



const contactDeleteService = async (contactId: string) => {

    const contactRespository = AppDataSource.getRepository(Contact)

    const contacts = await contactRespository.find()

    const contact = contacts.find( user => user.id === contactId)

    await contactRespository.delete(contact!.id)

    return true
}

export default contactDeleteService