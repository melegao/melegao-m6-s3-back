export interface IUser {
    id: string;
    name: string;
    email: string;
    phone: string
}

export interface IUserCreate {
    name: string,
    email: string,
    phone: string,
    password: string
}

export interface IUserLogin {
    email: string,
    password: string
}

export interface IContact{
    name: string,
    email: string,
    phone: string,
    userId: string,
}

export interface IUpdateContact{
    id: string,
    name?: string,
    email?: string,
    phone?: string,
    contactId: string,
}
