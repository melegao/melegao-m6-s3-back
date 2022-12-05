import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { IUpdateContact } from "../../interfaces/users";

const contatcUpdateService = async ({id, name, email, phone, contactId}: IUpdateContact) => {

    const contactRespository = AppDataSource.getRepository(Contact);

    const contact = contactRespository.findOneBy({id: contactId});

    if (!contact){
        throw new Error("Contact not found")
    }

    const updatedContact = {
        name,
        email,
        phone
    }

    await contactRespository.update({id: contactId}, updatedContact);

    const finalContact = await contactRespository.findOneBy({ id: contactId })

    return finalContact
}



export default contatcUpdateService