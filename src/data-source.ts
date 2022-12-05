import { DataSource } from "typeorm";
import { User } from "./entities/user.entity";

require("dotenv").config();

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,

    username: "meleg",
    password: "2131",
    database: "m6_sprint_3",

    synchronize: false,
    logging: true,
    entities: ["src/entities/*.ts"],
    migrations: ["src/migrations/*.ts"]
});

AppDataSource.initialize().then(() => {console.log("Data Source Initialized")}).catch((err) => {
    console.error("Error during Data Source Initialization", err)
})