import { Entity, Column, PrimaryColumn, CreateDateColumn, OneToMany} from "typeorm";
import {v4 as uuid} from "uuid"
import { Contact } from "./contact.entity";

@Entity("user")

export class User {
    @PrimaryColumn("uuid")
    readonly id: string

    @Column()
    name: string

    @Column()
    email: string

    @Column()
    phone: string

    @Column()
    password: string;

    @CreateDateColumn()
    created_at: Date;

    @CreateDateColumn()
    updated_at: Date;

    @OneToMany(() => Contact, (contact) => contact.user, {eager: true} )
    contact: Contact[];

    constructor(){
        if (!this.id){
            this.id = uuid()
        }
    }
}