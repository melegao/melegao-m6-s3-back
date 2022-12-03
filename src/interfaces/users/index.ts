export interface IUser {
    id: string;
    name: string;
    email: string;
    phone: string
}

export interface IUserCreate {
    name: string,
    email: string,
    phone: string
}